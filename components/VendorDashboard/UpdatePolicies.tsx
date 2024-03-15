"use client";
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThankYouComponenrForVendor from "../SnackBar/Success";
import { useRouter } from "next/navigation";
import validator from "validator";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { useEffect } from "react";
import { Poppins } from "next/font/google";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { SetUpdateSuccess } from "@/Store/VendorSlice";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function UpdatePoliciesComponent() {
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

  interface Policies {
    minimumNights: number | null;
    maximumNights: number | null;
    weekendMinimumNights: number | null;
    checkIn: string;
    checkout: string;
    ThingstoNote: string;
    CancellationPolicy: string;
  }
  const [policies, setPolicies] = useState<Policies>({
    minimumNights: null,
    maximumNights: null,
    weekendMinimumNights: null,
    checkIn: "",
    checkout: "",
    ThingstoNote: "",
    CancellationPolicy: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const formData = new FormData();
  const SetFormData = async () => {
    Object.entries(policies).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });
  };
  const charCount = (value: string) => {
    return value.trim().length;
  };

  const HandleCheckInCheckOutChange = (value: Date, name: keyof Policies) => {
    const formattedTime = dayjs(value).format("HH:mm");
    const isValid = validator.isISO8601(formattedTime);

    setPolicies((prevState) => ({
      ...prevState,
      [name]: formattedTime,
    }));

    setIsFormValid(isValid);
  };
  const HandleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    let isValid = true;

    if (name === "weekendMinimumNights") {
      isValid = validator.isInt(value);
    }

    if (name === "minimumNights" || name === "maximumNights") {
      isValid = validator.isInt(value);
    }
    if (name === "ThingstoNote") {
      const lengthOfChars = charCount(value);

      isValid = lengthOfChars >= 200 && lengthOfChars <= 2500;
    }

    if (name === "CancellationPolicy") {
      const lengthOfChars = charCount(value);

      isValid = lengthOfChars >= 200 && lengthOfChars <= 500;
    }

    setPolicies((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setIsFormValid(isValid);
  };
  const defaultTime = dayjs("12:00", { format: "HH:mm" }).toDate();

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await SetFormData();

      const POSTDATA = await fetch(
        `https://api.hostelbird.com/propertyDetails/updatePropertyDetails/${PropertyID}`,
        {
          method: "POST",
          credentials: "include",
          mode: "cors",
          body: formData,
        }
      );
      if (POSTDATA.ok && POSTDATA) {
        dispatch(SetUpdateSuccess("success"));
        window.history.back();
      } else if (POSTDATA.status === 401) {
        alert("Login Again");
        router.push("/vendor-login");
      } else {
        window.history.back();
        dispatch(SetUpdateSuccess("error"));
      }
    } catch (error) {
      alert("Server Down or Request Not completed");
    } finally {
      setIsLoading(false);
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
          console.log(data);

          setPolicies((prevPolicies) => ({
            ...prevPolicies,
            minimumNights: data?.propertyDetails?.minimumNights || null,
            maximumNights: data?.propertyDetails?.maximumNights || null,
            weekendMinimumNights:
              data?.propertyDetails?.weekendMinimumNights || null,
            checkIn: data?.propertyDetails?.checkIn || "",
            checkout: data?.propertyDetails?.checkout || "",
            ThingstoNote: data?.propertyDetails?.ThingstoNote || "",
            CancellationPolicy: data?.propertyDetails?.CancellationPolicy || "",
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

  if (isloading) {
    return (
      <>
        <LinearProgress color="info" />
      </>
    );
  }

  const MIN_CHARS = 200;
  const MAX_CHARS = 2500;
  const isWithinCharLimit = (
    value: string,
    MIN_CHARS: number,
    MAX_CHARS: number
  ) => {
    const length = value.trim().length;
    return length >= MIN_CHARS && length <= MAX_CHARS;
  };

  return !isloading ? (
    <Box className={`${poppins.variable}`}>
      <form onSubmit={HandleSubmit}>
        <Paper
          elevation={10}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2rem 10rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
              variant="h4"
            >
              LIST YOUR PROPERTY POLICIES
            </Typography>
            <Button
              variant="text"
              onClick={() => setIsEditing(!isEditing)}
              sx={{ marginBottom: "1rem", ml: "0rem" }}
            >
              {isEditing ? (
                <SaveIcon sx={{ color: "green" }} />
              ) : (
                <EditIcon sx={{ color: "#3D66F8" }} />
              )}
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            {isEditing ? (
              <TextField
                id="minimumNights"
                name="minimumNights"
                label="Minimum Nights"
                value={policies?.minimumNights || ""}
                onChange={HandleChange}
                sx={{ margin: "1rem", width: "30rem" }}
                type="number"
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  variant="h5"
                >
                  Minimum Nights
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    ml: "1rem",
                  }}
                  variant="h6"
                >
                  {policies.minimumNights}
                </Typography>
              </Box>
            )}

            {isEditing ? (
              <TextField
                id="maximumNights"
                name="maximumNights"
                value={policies?.maximumNights || ""}
                onChange={HandleChange}
                label="Maximum Nights"
                sx={{ margin: "1rem", width: "30rem" }}
                type="number"
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                  }}
                  variant="h5"
                >
                  MaximumNights Nights
                </Typography>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    ml: "1rem",
                  }}
                  variant="h6"
                >
                  {policies.maximumNights}
                </Typography>
              </Box>
            )}

            {isEditing ? (
              <Box sx={{ ml: "1rem", mt: "-1rem" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["StaticTimePicker"]}>
                    <DemoItem label="Check In">
                      <MobileTimePicker
                        value={defaultTime}
                        onChange={(newValue) =>
                          HandleCheckInCheckOutChange(
                            newValue as any,
                            "checkIn"
                          )
                        }
                        name="checkIn"
                        sx={{ width: "30rem" }}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                  }}
                  variant="h5"
                >
                  Check In
                </Typography>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    ml: "1rem",
                  }}
                  variant="h6"
                >
                  {policies.checkIn}
                </Typography>
              </Box>
            )}

            {isEditing ? (
              <Box sx={{ ml: "1rem" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["StaticTimePicker"]}>
                    <DemoItem label="Check out">
                      <MobileTimePicker
                        onChange={(newValue) =>
                          HandleCheckInCheckOutChange(
                            newValue as any,
                            "checkout"
                          )
                        }
                        value={defaultTime}
                        name="checkout"
                        sx={{ width: "30rem" }}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                  }}
                  variant="h5"
                >
                  Check Out
                </Typography>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    ml: "1rem",
                  }}
                  variant="h6"
                >
                  {policies.checkout}
                </Typography>
              </Box>
            )}

            {isEditing ? (
              <TextField
                id="weekendMinimumNights"
                name="weekendMinimumNights"
                value={policies?.weekendMinimumNights || ""}
                onChange={HandleChange}
                label="weekendMinimumNights"
                sx={{ margin: "1rem", width: "30rem" }}
                type="number"
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                  }}
                  variant="h5"
                >
                  Weekend Minimum Nights
                </Typography>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    ml: "1rem",
                  }}
                  variant="h6"
                >
                  {policies.weekendMinimumNights}
                </Typography>
              </Box>
            )}

            {isEditing ? (
              <TextareaAutosize
                id="ThingstoNote"
                name="ThingstoNote"
                placeholder="Enter Things to Note for customers"
                value={policies?.ThingstoNote || ""}
                onChange={HandleChange}
                style={{
                  maxWidth: "30rem",
                  minWidth: "30rem",
                  minHeight: "5rem",
                  maxHeight: "50rem",
                  marginLeft: "1rem",
                }}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                  }}
                  variant="h5"
                >
                  Things To Note for travellers:
                </Typography>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    ml: "1rem",
                  }}
                  variant="h6"
                >
                  {policies?.ThingstoNote}
                </Typography>
              </Box>
            )}

            <Typography
              variant="body2"
              style={{
                color: isWithinCharLimit(
                  policies?.ThingstoNote,
                  MIN_CHARS,
                  MAX_CHARS
                )
                  ? "green"
                  : "red",
              }}
            >
              {`${charCount(policies?.ThingstoNote || "")} characters`}
            </Typography>
            {!isWithinCharLimit(
              policies?.ThingstoNote,
              MIN_CHARS,
              MAX_CHARS
            ) && (
              <Typography variant="body2" style={{ color: "red" }}>
                Warning: The text must be between {MIN_CHARS} and {MAX_CHARS}{" "}
                characters.
              </Typography>
            )}
            {isEditing ? (
              <TextareaAutosize
                id="CancellationPolicy"
                name="CancellationPolicy"
                placeholder="Enter Cancellation Policy for your Property Rooms"
                value={policies?.CancellationPolicy || ""}
                onChange={HandleChange}
                style={{
                  maxWidth: "30rem",
                  minWidth: "30rem",
                  minHeight: "5rem",
                  maxHeight: "50rem",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                }}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                  }}
                >
                  Cancellation Policy
                </Typography>
                <Typography
                  variant="h6"
                  className={`${poppins.variable}`}
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    ml: "1rem",
                  }}
                >
                  {policies?.CancellationPolicy}
                </Typography>
              </Box>
            )}

            <Typography
              variant="body2"
              style={{
                color: isWithinCharLimit(
                  policies?.CancellationPolicy,
                  MIN_CHARS,
                  MAX_CHARS
                )
                  ? "green"
                  : "red",
              }}
            >
              {`${charCount(policies?.CancellationPolicy || "")} characters`}
            </Typography>
            {!isWithinCharLimit(
              policies?.CancellationPolicy,
              MIN_CHARS,
              MAX_CHARS
            ) && (
              <Typography variant="body2" style={{ color: "red" }}>
                Warning: The text must be between {MIN_CHARS} and {MAX_CHARS}
                characters.
              </Typography>
            )}
          </Box>
          <Button
            sx={{
              display: "flex",
              margin: "0 auto",
              width: "50%",
              backgroundColor: "purple",
            }}
            type="submit"
            variant="contained"
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </Paper>
      </form>
    </Box>
  ) : (
    ""
  );
}
