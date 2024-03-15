import * as React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  StyledBox1,
  StyledConatiner,
  StyledText,
  StyledTextField,
} from "./index.style";
import { useState } from "react";
import { useRouter } from "next/navigation";
import validator from "validator";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import Image from "next/image";
import { ThankYouComponent } from "@/components/LottieAnimations/ThankYou/ThankYou";
import CountiresandCities from "./CountiesAndCityName.json";
import axios from "axios";

export default function AddressForm() {
  const router = useRouter();
  interface PropertyForm {
    firstName: string;
    lastName: string;
    PropertyName: string;
    PropertyType: string;
    PhoneNumber: string;
    email: string;
    Address: string;
    city: string;
    distanceFromMainCity: number | null;
    distanceFromAirport: number | null;
    Number_of_beds: number | null;
    Total_number_of_bedrooms: number | null;
    Postcode_Zip_code: number | null;
    country: string | null;
    currency: string | null;
    image: File | string | null;

    [key: string]: string | number | null | File;
  }

  const [propertyData, setPropertyData] = useState<PropertyForm>({
    firstName: "",
    lastName: "",
    PropertyName: "",
    PropertyType: "",
    PhoneNumber: "",
    email: "",
    Address: "",
    city: "",
    distanceFromMainCity: null,
    distanceFromAirport: null,
    Number_of_beds: null,
    Total_number_of_bedrooms: null,
    Postcode_Zip_code: null,
    country: null,
    currency: null,
    image: "",
  });

  const [errorState, setErrorState] = useState({
    ErrorStateFirstName: false,
    ErrorStateLastName: false,
    ErrorStatePropertyName: false,
    ErrorStatePropertyType: false,
    ErrorStatePhoneNumber: false,
    ErrorStateemail: false,
    ErrorStateAddress: false,
    ErrorStateCity: false,
    ErrorStatedistanceFromMainCity: false,
    ErrorStatedistanceFromAirport: false,
    ErrorStateNumber_of_beds: false,
    ErrorStateTotal_number_of_bedrooms: false,
    ErrorStatePostcode_Zip_code: false,
    ErrorStatecountry: false,
    ErrorStateimage: false,
  });
  const [selectedRoomType, setSelectedRoomType] = useState<string>("both");

  const validateData = async (name: any, value: any) => {
    const integerNumberPattern = /^\d+$/;

    const namePattern = /^[A-Za-z\s]+$/;

    if (name === "firstName") {
      const isValid =
        value.length > 0 && value.length < 25 && namePattern.test(value);
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStateFirstName: !isValid,
      }));
    }

    if (name === "lastName") {
      const isValid =
        value.length > 0 && value.length < 25 && namePattern.test(value);
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStateLastName: !isValid,
      }));
    }

    if (name === "PhoneNumber") {
      const isValid =
        value.length === 10 &&
        validator.isMobilePhone(value) &&
        validator.isInt(value);
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStatePhoneNumber: !isValid,
      }));
    }

    if (name === "email") {
      let isValid = validator.isEmail(value);
      if (isValid) {
        const Duplicate = await CheckEmail(value);
        if (Duplicate) {
          isValid = !isValid;
        }
        setErrorState((prevState) => ({
          ...prevState,
          ErrorStateemail: !isValid,
        }));
      }
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStateemail: !isValid,
      }));
    }

    if (name === "PropertyName") {
      const isValid = value.length < 50 && !validator.isEmpty(value);
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStatePropertyName: !isValid,
      }));
    }

    if (name === "PropertyType") {
      const isValid =
        value === "Hostel" ||
        value === "Hotel" ||
        value === "Haveli" ||
        value === "GuestHouse" ||
        value === "Home Stay" ||
        value === "Hut Retreat" ||
        value === "Cottage" ||
        value === "Lodge";
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStatePropertyType: !isValid,
      }));
    }

    if (name === "distanceFromMainCity" || name === "distanceFromAirport") {
      const isValid = value.length <= 10 && value.length > 0;
      setErrorState((prevState) => ({
        ...prevState,
        ["ErrorState" + name]: !isValid,
      }));
    }

    if (
      name === "Total_number_of_bedrooms" ||
      name === "Number_of_beds" ||
      name === "Postcode_Zip_code"
    ) {
      const isValid =
        value !== null &&
        value !== undefined &&
        value.length <= 10 &&
        integerNumberPattern.test(value) &&
        validator.isInt(value);

      setErrorState((prevState) => ({
        ...prevState,
        ["ErrorState" + name]: !isValid,
      }));
    }

    if (name === "country") {
      const isValid = value !== null;
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStatecountry: !isValid,
      }));
    }

    if (name === "Address") {
      const isValid = value.length > 0 && value.length <= 100;
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStateAddress: !isValid,
      }));
    }

    if (name === "image") {
      const isValid = value !== "";
      setErrorState((prevState) => ({
        ...prevState,
        ErrorStateimage: !isValid,
      }));
    }
  };

  const handlePropertyDataChange = (event: any) => {
    const { name, value } = event.target;
    setPropertyData({ ...propertyData, [name]: value });
    validateData(name, value);
  };
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files && event.target.files[0];

    if (imageFile) {
      if (allowedFileTypes.includes(imageFile.type)) {
        setPropertyData({
          ...propertyData,
          image: imageFile,
        });
        setErrorState((prevState) => ({
          ...prevState,
          ErrorStateimage: false,
        }));
      } else {
        setPropertyData({
          ...propertyData,
          image: null,
        });
        setErrorState((prevState) => ({
          ...prevState,
          ErrorStateimage: true,
        }));
      }
    }
  };
  const HandleResetValue = () => {
    setPropertyData((prevState) => ({
      ...prevState,
      RoomPriceStartFrom: null,
      DormsPriceStartFrom: null,
    }));
  };

  const CheckEmail = async (value: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3110/property/checkEmail?email=${value}`
      );
      if (response.data.success) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      return true;
    }
  };

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const DisableButton = () => {
    return Object.values(errorState).some((error) => error);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isUploading, setIsUploading] = useState(false);
  const [showthankYouPage, setShowThankYouPage] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleCountryChange = (event: any) => {
    const selectedCountry = event.target.value;
    const citiesForSelectedCountry =
      CountiresandCities.find((item) => item.country === selectedCountry)
        ?.cities || [];

    const selectedCountryData = CountiresandCities.find(
      (item) => item.country === selectedCountry
    );
    const selectedCurrency = selectedCountryData?.currency || "";

    setPropertyData((prevState) => ({
      ...prevState,
      country: selectedCountry,
      city: citiesForSelectedCountry[0] || "",
      currency: selectedCurrency,
    }));
  };
  const handleSubmit = async () => {
    setIsUploading(true);
    const apiUrl = "https://api.hostelbird.com/property/createProperty";

    const formDataToSend = new FormData();
    Object.entries(propertyData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value as string | Blob);
      }
    });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataToSend,
        credentials: "include",
        mode: "cors",
      });

      if (response.ok) {
        setIsDialogOpen(false);
        setIsUploading(false);
        setShowThankYouPage(true);
      } else if (!response.ok || !response) {
        alert(response.status);
        setIsDialogOpen(false);
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error while submitting form:", error);
    } finally {
      setIsUploading(false);
    }
  };
  const isFormValid = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "PropertyName",
      "PhoneNumber",
      "PropertyType",
      "email",
      "Address",
      "distanceFromMainCity",
      "distanceFromAirport",
      "Number_of_beds",
      "Total_number_of_bedrooms",
      "Postcode_Zip_code",
      "country",
      "image",
    ];

    return requiredFields.every((field) => {
      if (Array.isArray(field)) {
        return (
          (propertyData[field[0]] !== null &&
            propertyData[field[0]] !== undefined) ||
          (propertyData[field[1]] !== null &&
            propertyData[field[1]] !== undefined)
        );
      } else {
        return (
          propertyData[field] !== undefined &&
          propertyData[field] !== null &&
          propertyData[field] !== ""
        );
      }
    });
  };

  const StyledTypo = (
    <Typography
      className={`${raleway.variable}`}
      sx={{ fontFamily: "var(--font-raleway)" }}
    >
      I have read and agreed to Hostel Birds terms and condition
    </Typography>
  );

  return !showthankYouPage ? (
    <>
      <StyledConatiner className={`${raleway.variable}`}>
        <Typography
          sx={{ fontFamily: "var(--font-raleway)", fontWeight: "bold" }}
          variant="h4"
        >
          Personal and Property Details
        </Typography>
        <Typography
          sx={{ fontFamily: "var(--font-raleway)", fontWeight: "light" }}
        >
          Information about your property and your Personal details
        </Typography>
        <StyledBox1>
          <StyledText variant="h5">Peronal Details</StyledText>
          <StyledTextField
            required
            id="firstName"
            name="firstName"
            label="First Name of Property Owner"
            value={propertyData?.firstName || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStateFirstName}
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            helperText={
              errorState.ErrorStateFirstName
                ? "First Name must contain some value where the range must be 0-25 characters  and must not contains any special symbols"
                : "First Name of Vendor"
            }
          />
          <StyledTextField
            required
            id="lastName"
            name="lastName"
            label="Last Name of Property Owner"
            value={propertyData?.lastName || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStateLastName}
            helperText={
              errorState.ErrorStateLastName
                ? "Last Name must contain some value where the range must be 0-25 characters  and must not contains any special symbols"
                : "Last Name of Vendor"
            }
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
          />
          <StyledTextField
            required
            id="email"
            name="email"
            label="Email"
            value={propertyData?.email || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStateemail}
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            helperText={
              errorState?.ErrorStateemail
                ? "Email Already Taken or Invalid Email"
                : "Email of Vendor"
            }
          />
          <StyledTextField
            id="PhoneNumber"
            name="PhoneNumber"
            label="Phone Number"
            value={propertyData?.PhoneNumber || ""}
            type="number"
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStatePhoneNumber}
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            helperText={
              errorState.ErrorStatePhoneNumber
                ? "Phone Number should be of 10 digits and Should not Contain Decimal Values"
                : "Dont Include Country Code"
            }
            required
          />

          <StyledTextField
            required
            id="country"
            name="country"
            label="Country"
            value={propertyData?.country || ""}
            onChange={handleCountryChange}
            select
            helperText={"Please Select from available countries"}
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            error={errorState?.ErrorStatecountry}
          >
            {CountiresandCities.sort().map((item) => (
              <MenuItem
                className={`${raleway.variable}`}
                key={item.country}
                value={item.country}
              >
                <Typography sx={{ fontFamily: "var(--font-raleway)" }}>
                  {item.country}
                </Typography>
              </MenuItem>
            ))}
          </StyledTextField>

          <StyledTextField
            required
            id="city"
            name="city"
            label="City"
            value={propertyData.city || ""}
            onChange={handlePropertyDataChange}
            disabled={!propertyData?.country}
            error={errorState?.ErrorStateCity}
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            select
            helperText={"Please Select from available cities"}
          >
            {CountiresandCities.find(
              (item) => item.country === propertyData.country
            )
              ?.cities.sort()
              .map((city) => (
                <MenuItem
                  className={`${raleway.variable}`}
                  key={city}
                  value={city}
                >
                  <Typography sx={{ fontFamily: "var(--font-raleway)" }}>
                    {city}
                  </Typography>
                </MenuItem>
              )) || []}
          </StyledTextField>
          <StyledTextField
            required
            id="currency"
            name="currency"
            label="Currency"
            onChange={handleCountryChange}
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            value={
              CountiresandCities.find(
                (item) => item.country === propertyData.country
              )?.currency || ""
            }
            disabled
            helperText={"Currency for the selected country"}
          />
        </StyledBox1>
        <StyledBox1>
          <StyledText variant="h5">Property Details</StyledText>
          <StyledTextField
            required
            id="PropertyName"
            name="PropertyName"
            label="Property Name"
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            value={propertyData?.PropertyName || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStatePropertyName}
            helperText={
              !errorState.ErrorStatePropertyName
                ? "Property Name"
                : "Range 1-50 characters"
            }
          />
          <StyledTextField
            required
            id="PropertyType"
            name="PropertyType"
            label="Property Type"
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            value={propertyData?.PropertyType || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStatePropertyType}
            select
          >
            <MenuItem value="Hostel">Hostel</MenuItem>
            <MenuItem value="Hotel">Hotel</MenuItem>
            <MenuItem value="Home Stay">Home Stay</MenuItem>
            <MenuItem value="Haveli">Haveli</MenuItem>
            <MenuItem value="GuestHouse">Guest House</MenuItem>
            <MenuItem value="Lodge">Lodge</MenuItem>
            <MenuItem value="Hut Retreat"> Hut Retreat</MenuItem>
            <MenuItem value="Cottage">Cottage</MenuItem>
          </StyledTextField>
          <StyledTextField
            required
            id="Total_number_of_bedrooms"
            name="Total_number_of_bedrooms"
            label="Total bedrooms"
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            type="number"
            value={propertyData?.Total_number_of_bedrooms || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStateTotal_number_of_bedrooms}
            helperText={
              !errorState.ErrorStateTotal_number_of_bedrooms
                ? "Total Bedrooms Your Property has"
                : "Only Integer Value and Max Length 10"
            }
          />
          <StyledTextField
            required
            id="Number_of_beds"
            name="Number_of_beds"
            label="Total beds"
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            type="number"
            value={propertyData?.Number_of_beds || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStateNumber_of_beds}
            helperText={
              !errorState.ErrorStateNumber_of_beds
                ? "Enter Total Number of Beds in your property"
                : "Only Integer Value and Max Length 10"
            }
          />

          <StyledTextField
            required
            id="distanceFromMainCity"
            name="distanceFromMainCity"
            label="Distance From City Center in Km"
            type="number"
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            value={propertyData?.distanceFromMainCity || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStatedistanceFromMainCity}
            helperText={
              !errorState.ErrorStatedistanceFromMainCity
                ? "Distance From City Center in Km"
                : "Max Length 10"
            }
          />
          <StyledTextField
            required
            id="distanceFromAirport"
            name="distanceFromAirport"
            label="Distance From Airport in Km"
            type="number"
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            value={propertyData?.distanceFromAirport || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStatedistanceFromAirport}
            helperText={
              !errorState.ErrorStatedistanceFromAirport
                ? "Distance From Airport in Km"
                : " Max Length 10"
            }
          />

          <StyledTextField
            required
            id="Address"
            name="Address"
            label="Property Address"
            value={propertyData?.Address || ""}
            onChange={handlePropertyDataChange}
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            helperText={
              !errorState?.ErrorStateAddress
                ? "Please mention full address of your property"
                : "Address length should atleast be 1 and not greater than 50 "
            }
            error={errorState?.ErrorStateAddress}
          />
          <StyledTextField
            required
            id="Postcode_Zip_code"
            name="Postcode_Zip_code"
            label="Pin or Zip code"
            inputProps={{ style: { fontFamily: "var(--font-raleway)" } }}
            InputLabelProps={{
              style: { fontFamily: "var(--font-raleway)" },
            }}
            type="number"
            value={propertyData?.Postcode_Zip_code || ""}
            onChange={handlePropertyDataChange}
            error={errorState?.ErrorStatePostcode_Zip_code}
            helperText={
              !errorState.ErrorStatePostcode_Zip_code ? (
                <Typography sx={{ fontFamily: "var(--font-raleway)" }}>
                  Zip or Pin code of your area
                </Typography>
              ) : (
                "Only Integer Value and Max Length 10"
              )
            }
          />
          <Typography
            sx={{ fontFamily: "var(--font-raleway)", mb: "1rem" }}
            variant="h6"
          >
            Goverment Approved Original Document
          </Typography>
          <Input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            inputProps={{
              accept: allowedFileTypes,
              style: { fontFamily: "var(--font-raleway)" },
            }}
            error={errorState?.ErrorStateimage}
            required
          />
        </StyledBox1>
        <FormControlLabel
          className={`${raleway.variable}`}
          control={
            <Checkbox
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
          }
          label={StyledTypo}
        />
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
            width: "40rem",
            fontFamily: "var(--font-raleway)",
          }}
          onClick={() => setIsDialogOpen(true)}
          variant="contained"
          disabled={!isFormValid() || !isCheckboxChecked || DisableButton()}
        >
          Confirm
        </Button>
      </StyledConatiner>

      {isDialogOpen && (
        <Dialog maxWidth="lg" open={isDialogOpen}>
          <DialogTitle sx={{ fontFamily: "var(--font-raleway)" }}>
            Confirm The details
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ fontFamily: "var(--font-raleway)" }} variant="h6">
              You have entered following details:
            </Typography>

            {Object.entries(propertyData).map(([key, value]) => {
              if (key !== "image") {
                const formattedKey = key
                  .replace(/_/g, " ")
                  .split(/(?=[A-Z])/)
                  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                  .join(" ");
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "lightgrey",
                      width: "100%",
                    }}
                    key={key}
                  >
                    <Typography variant="h6" sx={{ width: "25rem" }}>
                      {formattedKey}:
                    </Typography>
                    <Typography
                      marginLeft={10}
                      variant="h6"
                      sx={{ width: "25rem" }}
                    >
                      {formattedKey.includes("Distance")
                        ? (value as string) + " Km"
                        : formattedKey.includes("Price")
                        ? propertyData?.currency +
                          (value as string) +
                          " per unit"
                        : (value as string)}
                    </Typography>
                  </Box>
                );
              }
              return null;
            })}

            <Typography
              sx={{ fontFamily: "var(--font-raleway)" }}
              variant="body2"
            >
              Note: Please provide authentic information,any incorrect
              information may lead to rejection of your property
            </Typography>
          </DialogContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              sx={{ width: "5rem" }}
              variant="contained"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
            {!isUploading ? (
              <Button
                sx={{ width: "5rem" }}
                variant="contained"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Upload{" "}
              </Button>
            ) : (
              <CircularProgress size={20} style={{ marginLeft: "10px" }} />
            )}
          </Box>
        </Dialog>
      )}
    </>
  ) : (
    <ThankYouComponent />
  );
}
