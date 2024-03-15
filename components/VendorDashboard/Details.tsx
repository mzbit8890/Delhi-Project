import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  MenuItem,
  TextareaAutosize,
  LinearProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { Poppins } from "next/font/google";
import { SetUpdateSuccess } from "@/Store/VendorSlice";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
interface FormDataa {
  Number_of_beds: number | null;
  Total_number_of_bedrooms: number | null;
  PropertyDescription: string | null;
  PropertyType: string | null;
  distanceFromAirport: string;
  distanceFromCity: string;
}

const DetailsComponent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [vendorData, setVendorData] = useState<FormDataa>({
    Number_of_beds: null,
    Total_number_of_bedrooms: null,
    PropertyDescription: null,
    PropertyType: null,
    distanceFromAirport: "",
    distanceFromCity: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();

  let vendorName = useSelector(
    (state: any) => state?.vendor?.vendorNameForVendorDashboard
  );
  vendorName.replace("@", "%40");

  const Properties = useSelector(
    (state: any) => state.vendor?.PropertiesForVendorDashboard
  );

  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);

  const selectedProperty = Properties.find(
    (property: any) => property.id === PropertyID
  );

  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";

  const handleArrayPropertyChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (
      (name === "Total_number_of_bedrooms" || name === "Number_of_beds") &&
      validator.isInt(value)
    ) {
      setVendorData({
        ...vendorData,
        [name]: value,
      });
    }

    if (charCount(value) <= MAX_CHARS) {
      setVendorData({
        ...vendorData,
        PropertyDescription: value,
      });
    }
    setVendorData({
      ...vendorData,
      [name]: value,
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const apiUrl = `https://api.hostelbird.com/propertyDetails/updatePropertyDetails/${PropertyID}`;

    const formDataToSend = new FormData();
    Object.entries(vendorData).forEach(([key, value]) => {
      formDataToSend.append(key, value as keyof FormDataa);
    });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        credentials: "include",
        mode: "cors",
        body: formDataToSend,
      });
      if (response.ok) {
        setLoading(false);
        window.history.back();
        dispatch(SetUpdateSuccess("success"));
      } else if (response.status === 401) {
        alert("Login Again");
        router.push("/vendor-login");
      } else {
        alert("error");
        setLoading(false);
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error while submitting form:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/vendor/PropertyDetails/${vendorName}/${SelectedPropertyName}`,
          {
            credentials: "include",
            mode: "cors",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setVendorData((prevData) => ({
            ...prevData,
            distanceFromAirport: data?.distanceFromAirport,
            distanceFromCity: data?.distanceFromMainCity,
            Number_of_beds: data?.Number_of_beds || null,
            Total_number_of_bedrooms: data?.Total_number_of_bedrooms || null,
            PropertyDescription:
              data?.propertyDetails?.PropertyDescription || null,
            PropertyType: data?.propertyDetails?.PropertyType || null,
          }));
        } else {
          console.error("Failed to fetch data from API");
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, [vendorName, SelectedPropertyName]);

  if (loading) {
    return (
      <>
        <LinearProgress color="info" />
      </>
    );
  }

  const MIN_CHARS = 500;
  const MAX_CHARS = 3000;

  const charCount = (text: string | null) => {
    return text ? text.replace(/\s/g, "").length : 0;
  };

  const isWithinCharLimit = () => {
    const count = charCount(vendorData?.PropertyDescription);
    return count >= MIN_CHARS && count <= MAX_CHARS;
  };

  const DisableButtonOnError = () => {
    const hasMissingField = Object.entries(vendorData).some(
      ([key, value]) => value === null || value === undefined || value === ""
    );

    if (
      hasMissingField ||
      charCount(vendorData?.PropertyDescription) > MAX_CHARS ||
      charCount(vendorData?.PropertyDescription) < MIN_CHARS
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
                mt: "2rem",
              }}
            >
              Property Name: {SelectedPropertyName}
            </Typography>
          </Box>
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "2rem 10rem 10rem 10rem",
            }}
          >
            <Box sx={{ margin: "1.5rem", overflow: "hidden" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItem: "flex-start",
                  justifyContet: "space-between",
                }}
              >
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                    fontFamily: "var(--font-poppins)",
                  }}
                  variant="h5"
                >
                  Property Description
                </Typography>
                <Button
                  variant="text"
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{ marginBottom: "1rem", ml: "45rem" }}
                >
                  {isEditing ? (
                    <SaveIcon sx={{ color: "green" }} />
                  ) : (
                    <EditIcon sx={{ color: "#3D66F8" }} />
                  )}
                </Button>
              </Box>

              {!isEditing ? (
                <>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{
                      fontFamily: "var(--font-poppins)",
                      mb: "1rem",
                    }}
                    variant="body1"
                  >
                    {vendorData.PropertyDescription}
                  </Typography>
                </>
              ) : (
                <>
                  <TextareaAutosize
                    id="PropertyDescription"
                    name="PropertyDescription"
                    value={vendorData?.PropertyDescription || ""}
                    onChange={handleArrayPropertyChange}
                    placeholder="PropertyDescription"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                      minHeight: "20rem",
                      maxHeight: "50rem",
                    }}
                  />
                </>
              )}
              <Typography
                variant="body2"
                style={{ color: isWithinCharLimit() ? "green" : "red" }}
              >
                {`${charCount(
                  vendorData.PropertyDescription || ""
                )} characters`}
              </Typography>
              {!isWithinCharLimit() && (
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  variant="body2"
                  style={{ color: "red" }}
                >
                  Warning: The text must be between {MIN_CHARS} and {MAX_CHARS}{" "}
                  characters.
                </Typography>
              )}
              {isEditing ? (
                <Box>
                  <TextField
                    id="PropertyType"
                    name="PropertyType"
                    label="Property Type"
                    onChange={handleArrayPropertyChange}
                    value={vendorData?.PropertyType || ""}
                    select
                    sx={{ width: "15rem", marginTop: "1rem" }}
                  >
                    <MenuItem value="hostel">Hostel</MenuItem>
                    <MenuItem value="apartment">Apartment</MenuItem>
                    <MenuItem value="hotel">Hotel</MenuItem>
                    <MenuItem value="GuestHouse">Guest House</MenuItem>
                    <MenuItem value="Home Stay">Home Stay</MenuItem>
                    <MenuItem value="Lodge">Lodge</MenuItem>
                    <MenuItem value="Hut Retreat"> Hut Retreat</MenuItem>
                    <MenuItem value="Cottage">Cottage</MenuItem>
                  </TextField>
                </Box>
              ) : (
                <>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: "bold",
                    }}
                    variant="h5"
                  >
                    Property Type
                  </Typography>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{
                      fontFamily: "var(--font-poppins)",
                    }}
                  >
                    {vendorData?.PropertyType}
                  </Typography>
                </>
              )}
            </Box>

            <Box sx={{ margin: "1.5rem" }}>
              <Typography
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
                variant="h5"
              >
                Property Attributes
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                {isEditing ? (
                  <TextField
                    id="Total_number_of_bedrooms"
                    name="Total_number_of_bedrooms"
                    label="Total Number Of Bedrooms"
                    type="number"
                    value={vendorData?.Total_number_of_bedrooms || ""}
                    onChange={handleArrayPropertyChange}
                    sx={{ marginRight: "1rem", width: "15rem" }}
                  />
                ) : (
                  <Box>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      Total Bedrooms
                    </Typography>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      {vendorData?.Total_number_of_bedrooms}
                    </Typography>
                  </Box>
                )}

                {isEditing ? (
                  <TextField
                    id="Number_of_beds"
                    name="Number_of_beds"
                    value={vendorData?.Number_of_beds || ""}
                    onChange={handleArrayPropertyChange}
                    label="Total Number Of Beds"
                    type="number"
                    sx={{ marginRight: "1rem", width: "15rem" }}
                  />
                ) : (
                  <Box sx={{ ml: "1rem" }}>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      Number of Beds
                    </Typography>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      {vendorData?.Number_of_beds}
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", mt: "1rem" }}>
                {isEditing ? (
                  <TextField
                    id="distanceFromCity"
                    name="distanceFromCity"
                    label="Distance from city"
                    type="number"
                    value={vendorData?.distanceFromCity || ""}
                    onChange={handleArrayPropertyChange}
                    sx={{ marginRight: "1rem", width: "15rem" }}
                  />
                ) : (
                  <Box>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      Distance From City Center
                    </Typography>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      {vendorData?.distanceFromCity}
                    </Typography>
                  </Box>
                )}

                {isEditing ? (
                  <TextField
                    id="distanceFromAirport"
                    name="distanceFromAirport"
                    value={vendorData?.distanceFromAirport || ""}
                    onChange={handleArrayPropertyChange}
                    label="Distance From Airport "
                    type="number"
                    sx={{ marginRight: "1rem", width: "15rem" }}
                  />
                ) : (
                  <Box sx={{ ml: "1rem" }}>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      Distance From Airport
                    </Typography>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      {vendorData?.distanceFromAirport}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                className={`${poppins.variable}`}
                sx={{
                  display: "flex",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  width: "10rem",
                  backgroundColor: "purple",
                  fontFamily: "var(--font-poppins)",
                }}
                variant="contained"
                onClick={() => router.push(`/dashboard/${vendorName}`)}
              >
                Back
              </Button>
              <Button
                type="submit"
                className={`${poppins.variable}`}
                sx={{
                  display: "flex",
                  marginBottom: "1rem",
                  width: "10rem",
                  backgroundColor: "purple",
                  fontFamily: "var(--font-poppins)",
                }}
                variant="contained"
                disabled={DisableButtonOnError()}
              >
                Update
              </Button>
            </Box>
          </Paper>
        </Box>
      </form>
    </>
  );
};

export default DetailsComponent;
