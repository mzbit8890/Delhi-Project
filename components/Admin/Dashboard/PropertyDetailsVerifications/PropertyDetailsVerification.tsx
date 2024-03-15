import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Avatar,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Input,
  Paper,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { useSelector } from "react-redux";
import Image from "next/image";
import { StyledText } from "./PropertyDetailsVerification.style";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { GeTAdmin } from "../../Auth/Auth";

const PropertyDetailsVerficationComponent = () => {
  const PropertyNameFromReduxStore = useSelector(
    (state: any) => state.admin?.PropertyNameForAdminVerificationForAdmin
  );

  const VendorNameFromReduxStore = useSelector(
    (state: any) => state.admin?.VendorNameForAdmin
  );
  const PropertyIDFromRedux = useSelector(
    (state: any) => state.admin?.propertyID
  );
  const router = useRouter();
  interface PropertyDetailsI {
    id: string;
    PropertyName: string;
    city: string;
    vendorName: string;
    DateAndTime: string;
    PropertyImages: string[];
    PropertyDescription: string;
    PropertyType: string;
    minimumNights: number;
    maximumNights: number;
    weekendMinimumNights: number;
    checkIn: number;
    checkout: number;
    CancellationPolicy: string;
    ThingstoNote: string;
    PropertyFacalities: string[];
    PropertyServices: string[];
    PropertyEntertainment: string[];
    FAQs: string[];
  }
  interface PropertDecisionI {
    id: string;
    verifiedPropertyDetails: Boolean;
    PropertyName: string;
  }
  const [PropertyDec, setPropertyDec] = useState<PropertDecisionI | any>();

  const [PropertyDetailsVendor, setPropertyDetailsVendor] = useState<
    PropertyDetailsI | any
  >();

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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/AdminHostelBird-dashboard/getPropertyDetails/${VendorNameFromReduxStore}/${PropertyNameFromReduxStore}`,
          {
            credentials: "include",
            mode: "cors",
          }
        );
        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
          return;
        }
        const data = await response.json();
        setPropertyDetailsVendor(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [VendorNameFromReduxStore, PropertyNameFromReduxStore]);
  console.log("====================================");
  console.log(PropertyIDFromRedux);
  console.log("====================================");
  const [isDialogForConfirmationOpen, setDialogForConfirmationOpen] =
    useState(false);

  const [errorState, setErrorState] = useState({
    ProrityTextFieldError: false,
  });

  const openDialogForConfirmation = () => {
    setDialogForConfirmationOpen(true);
  };

  const [isRejectDialogOpen, setRejectDialogOpen] = useState(false);
  const openRejectDialog = () => {
    setRejectDialogOpen(true);
  };

  const handleConfirm = async () => {
    const updatedUserPropertyDecision = {
      verifiedPropertyDetails: true,
    };

    try {
      const response = await fetch(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/propertyDetailsDecision/${PropertyIDFromRedux}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          mode: "cors",
          body: JSON.stringify(updatedUserPropertyDecision),
        }
      );

      if (response.ok) {
        setPropertyDec((prevUserData: PropertDecisionI) => ({
          ...prevUserData!,
          verifiedPropertyDetails: true,
        }));

        alert("User Property Approved");
      } else {
        alert(response.status);
        console.error("Failed to update PropertyApproved");
      }
    } catch (error) {
      console.error("Error updating PropertyApproved:", error);
    }

    setDialogForConfirmationOpen(false);
  };

  const DeclineHandle = async () => {
    const updatedUserPropertyDecision = {
      verifiedPropertyDetails: false,
    };
    try {
      const response = await fetch(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/propertyDetailsDecision/${PropertyIDFromRedux}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserPropertyDecision),
          credentials: "include",
          mode: "cors",
        }
      );
      if (response.ok) {
        setPropertyDec((prevUserData: PropertDecisionI) => ({
          ...prevUserData!,
          verifiedPropertyDetails: false,
        }));
        alert("User Property Declined");
      } else {
        console.error("Failed to update PropertyApproved");
      }
    } catch (error) {
      console.error("Error updating PropertyApproved:", error);
    }
    setRejectDialogOpen(false);
  };

  return (
    <Container>
      <Paper elevation={10}>
        <Box sx={{ margin: "5rem" }}>
          <Typography
            sx={{ textAlign: "center", marginBottom: "2rem" }}
            variant="h3"
          >
            General Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h6">Property Name</Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetailsVendor?.PropertyName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h6">Vendor Name</Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetailsVendor?.vendorName}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h6">Property Last Updated At</Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetailsVendor?.DateAndTime}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <Typography variant="h6">City</Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetailsVendor?.city}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: "5rem" }}>
          <Typography
            sx={{ textAlign: "center", marginBottom: "2rem" }}
            variant="h3"
          >
            Property Information
          </Typography>
          <Grid container>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              item
              xs={12}
              md={12}
              lg={12}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Property Description
              </Typography>
              <StyledText>
                {PropertyDetailsVendor?.PropertyDescription}
              </StyledText>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Property Type
              </Typography>
              <StyledText>{PropertyDetailsVendor?.PropertyType}</StyledText>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Minimum Nights
              </Typography>
              <StyledText>{PropertyDetailsVendor?.minimumNights}</StyledText>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Maximum Nights
              </Typography>
              <StyledText>{PropertyDetailsVendor?.maximumNights}</StyledText>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Typography
                sx={{ fontWeight: "bold", width: "25rem" }}
                variant="h6"
              >
                Weekend Minimum Nights
              </Typography>
              <StyledText sx={{ textAlign: "center" }}>
                {PropertyDetailsVendor?.weekendMinimumNights}
              </StyledText>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Check In Time
              </Typography>
              <StyledText>{PropertyDetailsVendor?.checkIn}</StyledText>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Check Out Time
              </Typography>
              <StyledText>{PropertyDetailsVendor?.checkout}</StyledText>
            </Grid>
            <Grid container>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
                item
                xs={12}
                md={12}
                lg={12}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Things To Note
                </Typography>
                <StyledText>{PropertyDetailsVendor?.ThingstoNote}</StyledText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
                item
                xs={12}
                md={12}
                lg={12}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Cancellation Policy
                </Typography>
                <StyledText>
                  {PropertyDetailsVendor?.CancellationPolicy}
                </StyledText>
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
                item
                xs={12}
                md={12}
                lg={12}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Property Images
                </Typography>
                <StyledText>
                  {PropertyDetailsVendor?.PropertyImages?.map(
                    (img: string, index: number) => (
                      <Image
                        src={img}
                        loading="lazy"
                        key={index}
                        width={100}
                        height={100}
                        alt={`image ${index}.jpg`}
                        style={{
                          marginLeft: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      />
                    )
                  )}
                </StyledText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
                item
                xs={12}
                md={12}
                lg={12}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Property Entertainment
                </Typography>

                <StyledText
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {PropertyDetailsVendor?.PropertyEntertainment?.map(
                    (entertainment: string, index: number) => (
                      <Typography sx={{ marginLeft: "1rem" }} key={index}>
                        {entertainment}
                      </Typography>
                    )
                  )}
                </StyledText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
                item
                xs={12}
                md={12}
                lg={12}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Property Services
                </Typography>
                <StyledText
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {PropertyDetailsVendor?.PropertyServices?.map(
                    (Services: string, index: number) => (
                      <Typography sx={{ marginLeft: "1rem" }} key={index}>
                        {Services}
                      </Typography>
                    )
                  )}
                </StyledText>
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
                item
                xs={12}
                md={12}
                lg={12}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Property Facilities
                </Typography>
                <StyledText
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {PropertyDetailsVendor?.PropertyFacalities?.map(
                    (facility: string, index: number) => (
                      <Typography sx={{ marginLeft: "1rem" }} key={index}>
                        {facility}
                      </Typography>
                    )
                  )}
                </StyledText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
                item
                xs={12}
                md={12}
                lg={12}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Property FAQs
                </Typography>
                <StyledText
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {PropertyDetailsVendor?.FAQs?.map(
                    (question: string, index: number) => (
                      <Typography sx={{ marginLeft: "1rem" }} key={index}>
                        {index + 1}: {question},{" "}
                      </Typography>
                    )
                  )}
                </StyledText>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ width: "10rem", backgroundColor: "red", marginRight: "1rem" }}
          onClick={openRejectDialog}
          variant="contained"
        >
          Reject
        </Button>

        <Dialog
          open={isRejectDialogOpen}
          onClose={() => setRejectDialogOpen(false)}
        >
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to reject this property Details?
              <br />
              <strong>
                {" "}
                Note: Vendor Will be asked to resubmit their details
              </strong>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setRejectDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={DeclineHandle} color="primary">
              Reject
            </Button>
          </DialogActions>
        </Dialog>

        <Button
          sx={{ width: "10rem", backgroundColor: "green" }}
          onClick={openDialogForConfirmation}
          variant="contained"
        >
          Confirm
        </Button>

        <Dialog
          open={isDialogForConfirmationOpen}
          onClose={() => setDialogForConfirmationOpen(false)}
        >
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Before Confirming the Details please set the priority of Property.
              <strong>
                {" "}
                Choose between 1-5 where 1 is lowest and 5 is highest{" "}
              </strong>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setDialogForConfirmationOpen(false)}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              color="primary"
              disabled={errorState?.ProrityTextFieldError}
            >
              Approve
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default PropertyDetailsVerficationComponent;
