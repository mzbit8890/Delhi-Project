// pages/PropertyPage.tsx
import React, { useEffect, useLayoutEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setVendorNameForAdmin,
  setPropertyNameForAdmin,
  setPropertyIDForAdmin,
} from "@/Store/AdminSlice";
import { GeTAdmin } from "../../Auth/Auth";
import {
  NameOfCountries,
  NameOfCities,
} from "../../NameofCountiesAndCities/CountiesAndCities";
import SuccessComponent from "@/components/SnackBar/Success";
import FailureComponent from "@/components/SnackBar/Failure";

interface Property {
  id: string;
  AdminRating: number;
  PropertyName: string;
  RoomPriceStartFrom: number;
  DormsPriceStartFrom: number;
  distanceFromMainCity: number;
  distanceFromAirport: number;
  city: string;
  Postcode_Zip_code: number;
  country: string;
  Address: string;
  VendorName: string;
}

const PropertyPage = () => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [priority, setPriority] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [properties, setProperties] = useState<Property[]>([]);

  const [selectedProperty, setSelectedProperty] = useState();
  //   const dispatch = useDispatch();
  // const urlNeededforCityName = "Delhi";

  const router = useRouter();

  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = await GeTAdmin();

        if (!isAuthenticated) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, [router]);

  const [CheckError, setCheckError] = useState(false);

  const checkErrorForPriority = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    const isValidPriority =
      /^\d{1,2}$/.test(inputValue) &&
      parseInt(inputValue, 10) >= 1 &&
      parseInt(inputValue, 10) <= 10;

    setCheckError(!isValidPriority);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/property/${selectedCountry}/${selectedCity}`
        );
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCity, selectedCountry]);

  const openDialogHandler = (property: string) => {
    setSelectedProperty(property as any);
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const updateRatingLocally = (property: string, newRating: number) => {
    setProperties((prevProperties) =>
      prevProperties.map((prevProperty) =>
        prevProperty.PropertyName === property
          ? { ...prevProperty, AdminRating: newRating }
          : prevProperty
      )
    );
  };

  const handlePrioritySubmit = async () => {
    try {
      const isValidPriority =
        /^\d{1,2}$/.test(priority) &&
        parseInt(priority, 10) >= 1 &&
        parseInt(priority, 10) <= 10;

      if (isValidPriority) {
        const setRatingResponse = await fetch(
          `https://api.hostelbird.com/AdminHostelBird-dashboard/rating/setRating/${selectedProperty}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            mode: "cors",
            body: JSON.stringify({ rating: priority as unknown as number }),
          }
        );

        if (setRatingResponse.ok) {
          const newRating = parseInt(priority, 10);
          updateRatingLocally(selectedProperty as any, newRating);
        } else {
          console.error("Failed to set rating");
        }

        closeDialogHandler();
      } else {
        alert("Priority should be a number between 1 and 10");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  const handleCountryChange = (event: any) => {
    const selectedCountryValue = event.target.value as string;
    setSelectedCountry(selectedCountryValue);
    setSelectedCity("");
  };

  const handleCityChange = (event: any) => {
    setSelectedCity(event.target.value as string);
  };
  const UpdateValue = useSelector((state: any) => state.vendor?.successValue);

  return (
    <Container>
      {UpdateValue === "Fail" ? (
        <FailureComponent />
      ) : UpdateValue === "Success" ? (
        <SuccessComponent message="Property Deleled Successfully" />
      ) : null}
      <Typography
        textAlign={"center"}
        sx={{ marginBottom: "2rem", mt: "1rem" }}
        variant="h2"
      >
        Properties By city and country
      </Typography>
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5rem",
          mb: "1rem",
        }}
      >
        {NameOfCountries.sort().map((country: any, index: number) => (
          <MenuItem value={country} key={index}>
            {country}
          </MenuItem>
        ))}
      </Select>

      {selectedCountry && (
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            mb: "1rem",
          }}
        >
          {(NameOfCities[selectedCountry] || [])
            .sort()
            .map((city: string, index: number) => (
              <MenuItem value={city} key={index}>
                {city}
              </MenuItem>
            ))}
        </Select>
      )}
      <Grid container spacing={2}>
        {properties.length > 0 ? (
          properties?.map((property) => (
            <Grid key={property.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  mt: "1rem",
                }}
                elevation={10}
              >
                <Typography sx={{ fontWeight: "lighter", fontSize: "0.81rem" }}>
                  Property Name:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property.PropertyName}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Current Rating:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property?.AdminRating}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Room Price Start From:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Rs {property?.RoomPriceStartFrom}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Dorms Price Start From:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Rs {property?.DormsPriceStartFrom}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Distance from Main City:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property.distanceFromMainCity} km
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Distance from Airport:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property.distanceFromAirport} km
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  City:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property.city}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Country:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property.country}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Address:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property.Address}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Postcode/Zip code:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {property?.Postcode_Zip_code}
                  </span>
                </Typography>

                <Button
                  sx={{ backgroundColor: "#FF5F1F", mt: "1rem" }}
                  variant="contained"
                  color="primary"
                  name={`${property?.PropertyName}`}
                  onClick={() => openDialogHandler(property?.PropertyName)}
                >
                  Change Priority
                </Button>
                <Button
                  sx={{ backgroundColor: "#FF5F1F", mt: "1rem" }}
                  variant="contained"
                  color="primary"
                  name={`${property?.PropertyName}`}
                  onClick={() => {
                    router.push(`propertyDetails/${property?.VendorName}`),
                      dispatch(setVendorNameForAdmin(property?.VendorName)),
                      dispatch(setPropertyNameForAdmin(property?.PropertyName));
                    dispatch(setPropertyIDForAdmin(property.id));
                  }}
                >
                  View Property
                </Button>
              </Paper>
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <Typography variant="h2" sx={{ mt: "1rem" }}>
              Nothing to show
            </Typography>
          </Box>
        )}
      </Grid>

      <Dialog maxWidth="lg" open={openDialog} onClose={closeDialogHandler}>
        <DialogTitle>Set Priority</DialogTitle>
        <DialogContent>
          <TextField
            label="Priority"
            type="number"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              checkErrorForPriority(e as any);
            }}
            error={CheckError}
            helperText={
              CheckError ? "Priority should be a number between 1 and 10" : ""
            }
            fullWidth
            sx={{ marginTop: "1rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialogHandler}>Cancel</Button>
          <Button onClick={handlePrioritySubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PropertyPage;
