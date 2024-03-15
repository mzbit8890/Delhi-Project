import { useEffect, useLayoutEffect, useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { GeTAdmin } from "../../Auth/Auth";
import axios from "axios";
import { SetUpdateSuccess } from "@/Store/VendorSlice";

interface PropertyDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  AdminRating: number;
  PhoneNumber: string;
  PropertyName: string;
  PropertyType: string;
  RoomPriceStartFrom: string;
  DormsPriceStartFrom: string;
  distanceFromMainCity: string;
  distanceFromAirport: string;
  currency: string;
  city: string;
  Postcode_Zip_code: number;
  Total_number_of_bedrooms: number;
  Number_of_beds: number;
  country: string;
  DateAndTime: string;
  Address: string;
  uploadedImageDoc: string;
  verifiedProperty: boolean;
  PropertDetailsVerified: boolean;
  isFeatured: boolean;
  propertyDetails: {
    id: string;
    PropertyName: string;
    city: string;
    vendorName: string;
    LastUpdated: string;
    PropertyImages: string[];
    PropertyDescription: string;
    PropertyType: string;
    minimumNights: number;
    maximumNights: number;
    weekendMinimumNights: number;
    checkIn: string;
    checkout: string;
    CancellationPolicy: string;
    ThingstoNote: string;
    PropertyFacalities: string[];
    PropertyServices: string[];
    PropertyEntertainment: string[];
    FoodAndDrinks: string[];
  };
}

const PropertyPageDetails = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

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
  const [details, setDetails] = useState<PropertyDetails | null>(null);

  const VendorNameFromRedux = useSelector(
    (state: any) => state.admin?.VendorNameForAdmin
  );
  const PropertyNameFromRedux = useSelector(
    (state: any) => state.admin?.PropertyNameForAdminVerificationForAdmin
  );

  const PropertyId = useSelector((state: any) => state.admin?.propertyID);

  const DisplayDetails = async () => {
    const response = await fetch(
      `https://api.hostelbird.com/AdminHostelBird-dashboard/VendorProperty/${PropertyId}`,
      {
        credentials: "include",
        mode: "cors",
      }
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    DisplayDetails().then((data) => {
      setDetails(data);
    });
  }, [details]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/deleteProperty/${PropertyId}`,
        {
          withCredentials: true,
        }
      );
      alert(setOpen(false));
      dispatch(SetUpdateSuccess("Success"));
      router.push("/admin-main/dashboard-restricted/properties");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Box>
        <Button
          sx={{ border: "1px solid red", color: "red", mt: "1rem" }}
          variant="outlined"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Delete Property
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Property?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this property? This action cannot
              be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleDelete} color="primary" autoFocus>
              Yes, Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Typography sx={{ marginTop: "5rem" }} textAlign="center" variant="h3">
        Property Overview
      </Typography>

      <Box sx={{ marginTop: "2rem" }}>
        <Typography variant="h6">Property Last Updated:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.DateAndTime}
        </Typography>

        <Typography variant="h6">Property Description:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.PropertyDescription}
        </Typography>

        <Typography variant="h6">Cancellation Policy:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.CancellationPolicy}
        </Typography>

        <Typography variant="h6">Things to Note:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.ThingstoNote}
        </Typography>

        <Typography variant="h6">Minimum Nights:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.minimumNights}
        </Typography>

        <Typography variant="h6">Maximum Nights:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.maximumNights}
        </Typography>

        <Typography variant="h6">Weekend Minimum Nights:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.weekendMinimumNights}
        </Typography>

        <Typography variant="h6">Check In:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.checkIn}
        </Typography>

        <Typography variant="h6">Checkout:</Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {details?.propertyDetails?.checkout}
        </Typography>

        <Grid container spacing={2} sx={{ mt: "3rem" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "80rem" }}>
              <Typography variant="h4" textAlign="center" mb="2rem">
                Entertainments
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
                  gridGap: "1rem",
                }}
              >
                {details?.propertyDetails?.PropertyEntertainment.map(
                  (entertainment: string, index: number) => (
                    <Typography key={index} textAlign="center">
                      {entertainment}
                    </Typography>
                  )
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "80rem" }}>
              <Typography variant="h4" textAlign="center" mb="2rem">
                Services
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
                  gridGap: "1rem",
                }}
              >
                {details?.propertyDetails?.PropertyServices.map(
                  (service: string, index: number) => (
                    <Typography key={index} textAlign="center">
                      {service}
                    </Typography>
                  )
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ maxWidth: "80rem", mt: "3rem" }}>
          <Typography variant="h4" textAlign="center" mb="2rem">
            Facilities
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
              gridGap: "1rem",
            }}
          >
            {details?.propertyDetails?.PropertyFacalities.map(
              (facility: string, index: number) => (
                <Typography key={index} textAlign="center">
                  {facility}
                </Typography>
              )
            )}
          </Box>
        </Box>

        <Box sx={{ maxWidth: "80rem", mt: "3rem" }}>
          <Typography variant="h4" textAlign="center" mb="2rem">
            Foods And Drinks
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
              gridGap: "1rem",
            }}
          >
            {details?.propertyDetails?.FoodAndDrinks.map(
              (item: string, index: number) => (
                <Typography key={index} textAlign="center">
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Box>

        <Box sx={{ maxWidth: "80rem", mt: "3rem" }}>
          <Typography variant="h4" textAlign="center" mb="2rem">
            Property Images
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
              gridGap: "1rem",
            }}
          >
            {details?.propertyDetails?.PropertyImages.map(
              (srcImage: string, index: number) => (
                <Image
                  key={index}
                  src={srcImage}
                  alt={`Property Image ${index}`}
                  width={150}
                  height={150}
                />
              )
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PropertyPageDetails;
