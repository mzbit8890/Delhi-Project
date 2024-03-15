import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  TextField,
  Grid,
  Box,
  Divider,
  Paper,
  TextareaAutosize,
  LinearProgress,
} from "@mui/material";
import {
  FreeSection,
  ServiceSection,
  EntertainmentSection,
  GeneralSection,
  FoodAndDrinks,
} from "./FacilitiesArray";
import { useDispatch, useSelector } from "react-redux";
import ThankYouComponenrForVendor from "../SnackBar/Success";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { SetUpdateSuccess } from "@/Store/VendorSlice";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ListFacilities = () => {
  const router = useRouter();
  interface PropertyData {
    PropertyType: string;
    PropertyFacalities: string[];
    PropertyServices: string[];
    PropertyEntertainment: string[];
    FoodAndDrinks: string[];
  }

  const [propertyData, setPropertyData] = useState<PropertyData>({
    PropertyType: "",
    PropertyFacalities: [],
    PropertyServices: [],
    PropertyEntertainment: [],
    FoodAndDrinks: [],
  });
  const [isEditing, setIsEditing] = useState(false);

  let username = useSelector(
    (state: any) => state?.vendor?.vendorNameForVendorDashboard
  );
  username.replace("@", "%40");

  const Properties = useSelector(
    (state: any) => state.vendor?.PropertiesForVendorDashboard
  );

  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);

  const selectedProperty = Properties.find(
    (property: any) => property.id === PropertyID
  );
  const dispatch = useDispatch();

  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";

  const handleCheckboxChange = (
    arrayName: keyof PropertyData,
    value: string
  ) => {
    setPropertyData((prevData) => ({
      ...prevData,
      [arrayName]: (prevData[arrayName] as string[])?.includes(value)
        ? (prevData[arrayName] as string[])?.filter((item) => item !== value)
        : [...(prevData[arrayName] as string[]), value],
    }));
  };

  const [isloading, setIsLoading] = useState(false);

  const handleFacilitiesSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.hostelbird.com/propertyDetails/updatePropertyDetails/${PropertyID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(propertyData),
          credentials: "include",
          mode: "cors",
        }
      );
      if (!response.ok && response.status >= 400) {
        const errorData = await response.json();
        window.history.back();
        dispatch(SetUpdateSuccess("error"));
      } else if (response.status === 401) {
        alert("Login Again");
        router.push("/vendor-login");
      } else if (response.ok) {
        window.history.back();
        dispatch(SetUpdateSuccess("success"));
      }
    } catch (error) {
      console.error("Error updating property:", error);
      alert("An error occurred while updating the property. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  if (isloading) {
    <>
      <LinearProgress color="info" />
    </>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/vendor/PropertyDetails/${username}/${SelectedPropertyName}`,
          {
            credentials: "include",
            mode: "cors",
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);

          setPropertyData({
            PropertyType: data?.PropertyType || "",
            PropertyFacalities: data?.propertyDetails?.PropertyFacalities || [],
            PropertyServices: data?.propertyDetails?.PropertyServices || [],
            PropertyEntertainment:
              data?.propertyDetails?.PropertyEntertainment || [],
            FoodAndDrinks: data?.propertyDetails?.FoodAndDrinks || [],
          });
        } else {
          console.error("Failed to fetch data from API");
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, [username, SelectedPropertyName]);

  return !isloading ? (
    <Paper
      elevation={10}
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "2rem 10rem 10rem 10rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Button
            variant="text"
            onClick={() => setIsEditing(!isEditing)}
            sx={{ marginBottom: "1rem", ml: "65rem" }}
          >
            {isEditing ? (
              <SaveIcon sx={{ color: "green" }} />
            ) : (
              <EditIcon sx={{ color: "#3D66F8" }} />
            )}
          </Button>
        </Box>
        <Typography
          align="justify"
          variant="h5"
          fontWeight={"bold"}
          className={`${poppins.variable}`}
          sx={{
            fontFamily: "var(--font-poppins)",
            marginTop: "1rem",
            color: "green",
          }}
        >
          Services and other Facilties
        </Typography>
        <Divider
          flexItem
          sx={{
            display: "flex",
            width: "100%",
          }}
        />
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
            gridGap: "1rem",
            marginTop: "1rem",
          }}
        >
          {ServiceSection?.map((Services) => (
            <FormControlLabel
              id="PropertyServices"
              name="PropertyServices"
              key={Services}
              control={
                <Checkbox
                  disabled={
                    propertyData.PropertyServices.includes(Services) &&
                    !isEditing
                  }
                  className={`${poppins.variable}`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                  checked={propertyData.PropertyServices.includes(Services)}
                  onChange={() =>
                    handleCheckboxChange("PropertyServices", Services)
                  }
                />
              }
              label={
                <Typography
                  className={`${poppins.variable}`}
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.8rem"
                  sx={{ lineHeight: 1, fontFamily: "var(--font-poppins)" }}
                >
                  {Services}
                </Typography>
              }
            />
          ))}
        </Container>
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
            gridGap: "1rem",
            marginTop: "1rem",
          }}
        >
          {GeneralSection?.map((GenService, index) => (
            <FormControlLabel
              id="PropertyServices"
              name="PropertyServices"
              key={index}
              control={
                <Checkbox
                  disabled={
                    propertyData.PropertyServices.includes(GenService) &&
                    !isEditing
                  }
                  className={`${poppins.variable}`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                  checked={propertyData.PropertyServices.includes(GenService)}
                  onChange={() =>
                    handleCheckboxChange("PropertyServices", GenService)
                  }
                />
              }
              label={
                <Typography
                  className={`${poppins.variable}`}
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.8rem"
                  sx={{ lineHeight: 1, fontFamily: "var(--font-poppins)" }}
                >
                  {GenService}
                </Typography>
              }
            />
          ))}
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          className={`${poppins.variable}`}
          sx={{
            marginTop: "1rem",
            color: "#FF69B4",
            fontFamily: "var(--font-poppins)",
          }}
          variant="h5"
          fontWeight={"bold"}
        >
          Free Facility
        </Typography>
        <Divider
          flexItem
          sx={{
            display: "flex",
            width: "100%",
          }}
        />
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
            gridGap: "1rem",
            marginTop: "1rem",
          }}
        >
          {FreeSection?.map((facility) => (
            <FormControlLabel
              key={facility}
              control={
                <Checkbox
                  id="PropertyFacalities"
                  name="PropertyFacalities"
                  className={`${poppins.variable}`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                  disabled={
                    propertyData.PropertyFacalities.includes(facility) &&
                    !isEditing
                  }
                  checked={propertyData.PropertyFacalities.includes(facility)}
                  onChange={() =>
                    handleCheckboxChange("PropertyFacalities", facility)
                  }
                />
              }
              label={
                <Typography
                  className={`${poppins.variable}`}
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.8rem"
                  sx={{ lineHeight: 1, fontFamily: "var(--font-poppins)" }}
                >
                  {facility}
                </Typography>
              }
            />
          ))}
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "2rem",
        }}
      >
        <Typography
          className={`${poppins.variable}`}
          sx={{
            marginTop: "1rem",
            color: "#3D66F8",
            fontFamily: "var(--font-poppins)",
          }}
          variant="h5"
          fontWeight={"bold"}
        >
          Entertainment
        </Typography>
        <Divider
          flexItem
          sx={{
            display: "flex",
            width: "100%",
          }}
        />
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
            gridGap: "1rem",
            marginTop: "1rem",
          }}
        >
          {EntertainmentSection.map((Entertainment) => (
            <FormControlLabel
              id="PropertyEntertainment"
              name="PropertyEntertainment"
              key={Entertainment}
              control={
                <Checkbox
                  disabled={
                    propertyData.PropertyEntertainment.includes(
                      Entertainment
                    ) && !isEditing
                  }
                  className={`${poppins.variable}`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                  checked={propertyData.PropertyEntertainment.includes(
                    Entertainment
                  )}
                  onChange={() =>
                    handleCheckboxChange("PropertyEntertainment", Entertainment)
                  }
                />
              }
              label={
                <Typography
                  className={`${poppins.variable}`}
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.8rem"
                  sx={{
                    lineHeight: 1,
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {Entertainment}
                </Typography>
              }
            />
          ))}
        </Container>
      </Box>
      <Divider
        flexItem
        sx={{
          display: "flex",
          width: "100%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "50rem",
          mx: "auto",
        }}
      >
        <Typography
          align="justify"
          variant="h5"
          gutterBottom
          fontWeight={"bold"}
          className={`${poppins.variable}`}
          sx={{ fontFamily: "var(--font-poppins)", mt: "1rem" }}
        >
          Food And Drinks
        </Typography>
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
            gridGap: "1rem",
            marginTop: "1rem",
          }}
        >
          {FoodAndDrinks.map((item: string, index: number) => (
            <FormControlLabel
              id="FoodAndDrinks"
              name="FoodAndDrinks"
              key={index}
              control={
                <Checkbox
                  className={`${poppins.variable}`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                  disabled={
                    propertyData.FoodAndDrinks.includes(item) && !isEditing
                  }
                  checked={propertyData?.FoodAndDrinks.includes(item)}
                  onChange={() => handleCheckboxChange("FoodAndDrinks", item)}
                />
              }
              label={
                <Typography
                  className={`${poppins.variable}`}
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.8rem"
                  sx={{
                    lineHeight: 1,
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {item}
                </Typography>
              }
            />
          ))}
        </Container>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFacilitiesSubmit}
          className={`${poppins.variable}`}
          sx={{
            fontFamily: "var(--font-poppins)",
            marginTop: "2rem",
            marginBottom: "2rem",
            backgroundColor: "purple",
          }}
        >
          Update Facilities
        </Button>
      </Box>
    </Paper>
  ) : (
    ""
  );
};

export default ListFacilities;
