// pages/index.tsx

import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Input,
  LinearProgress,
  Paper,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  StyledBoxForDocumnetImage,
  StyledBoxForGeneral,
  StyledBoxForPropertyInfo,
  StyledContainerPV,
  StyledPaperPV,
  StyledTextForGeneral,
  StyledTextForProperty,
} from "./propertyVerifcations.style";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { setEmailForAdmin } from "@/Store/AdminSlice";
import sendEmail from "../Email/sendEmail";
import { useRouter } from "next/navigation";
import { GeTAdmin } from "../../Auth/Auth";

const PropertyVerficationComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [message, setMessage] = useState("");

  interface PropertyDetailsI {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    PropertyName: string;
    distanceFromMainCity: number;
    distanceFromAirport: number;
    city: string;
    Postcode_Zip_code: string;
    Total_number_of_bedrooms: number;
    Number_of_beds: number;
    country: string;
    DateAndTime: string;
    Address: string;
    uploadedImageDoc: string;
    verifiedProperty: Boolean;
    PropertDetailsVerified: Boolean;
    PhoneNumber: string;
  }

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

  const [PropertyDetails, setPropertyDeatils] = useState<
    PropertyDetailsI | any
  >();

  const PropertyNameFromReduxStore = useSelector(
    (state: any) => state.admin?.PropertyNameForAdminVerificationForAdmin
  );

  const VendorNameFromReduxStore = useSelector(
    (state: any) => state.admin?.VendorNameForAdmin
  );
  const VendorUsername = useSelector(
    (state: any) => state.admin?.emailForAdmin
  );
  const PropertyIDFromRedux = useSelector(
    (state: any) => state.admin?.propertyID
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isDialogForConfirmationOpen, setDialogForConfirmationOpen] =
    useState(false);

  const openDialogForConfirmation = () => {
    setDialogForConfirmationOpen(true);
  };

  const [isRejectDialogOpen, setRejectDialogOpen] = useState(false);
  const openRejectDialog = () => {
    setRejectDialogOpen(true);
  };

  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    const updatedUserPropertyDecision = {
      PropertyID: PropertyDetails?.id,
      verifyProperty: true,
      PropertyName: PropertyDetails?.PropertyName,
    };
    try {
      const response = await fetch(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/propertyDecision/${VendorUsername}`,
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
        setPropertyDeatils(
          (prevUserData: PropertyDetailsI | null | undefined) => ({
            ...prevUserData!,
            verifyProperty: true,
          })
        );
        // await sendEmail(
        //   PropertyDetails?.firstName,
        //   PropertyDetails?.email,
        //   message
        // );
        setLoading(false);
        alert("User Property Approved");
        router.push("/admin-main/dashboard-restricted");
      } else if (response.status === 401) {
        alert("UnAuthorized");
        router.push("/");
      } else {
        alert(response.status);
        console.error("Failed to update PropertyApproved");
      }
    } catch (error) {
      console.error("Error updating PropertyApproved:", error);
    }

    setDialogForConfirmationOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.hostelbird.com/AdminHostelBird-dashboard/getPropertyForVerification/${VendorNameFromReduxStore}/${PropertyNameFromReduxStore}/${PropertyIDFromRedux}`,
          {
            credentials: "include",
            mode: "cors",
          }
        );

        if (!response.ok) {
          alert(`HTTP error! Status: ${response.statusText}`);
          setLoading(false);
        }
        const data = await response.json();
        setPropertyDeatils(data);
        dispatch(setEmailForAdmin(PropertyDetails?.email));
        setLoading(false);
      } catch (error) {
        alert(error);
        setLoading(false);
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [
    VendorNameFromReduxStore,
    PropertyNameFromReduxStore,
    PropertyDetails?.email,
    dispatch,
  ]);
  const DeclineHandle = async () => {
    setLoading(true);
    const updatedUserPropertyDecision = {
      PropertyID: PropertyDetails?.id,
      verifyProperty: false,
      PropertyName: PropertyDetails?.PropertyName,
    };
    try {
      const response = await fetch(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/propertyDecision/${VendorUsername}`,
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
        setPropertyDeatils(
          (prevUserData: PropertyDetailsI | null | undefined) => ({
            ...prevUserData!,
            verifyProperty: false,
          })
        );
        setLoading(false);
        alert("User Property Declined");
      } else {
        setLoading(false);
        console.error("Failed to update PropertyApproved");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error updating PropertyApproved:", error);
    }
    setRejectDialogOpen(false);
  };

  if (loading) {
    <>
      {" "}
      <LinearProgress color="info" />
    </>;
  }

  return (
    <StyledContainerPV>
      <StyledPaperPV elevation={10}>
        <StyledBoxForGeneral>
          <Typography
            sx={{ textAlign: "center", marginBottom: "2rem" }}
            variant="h3"
          >
            General Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForGeneral variant="h6">
                Full Name
              </StyledTextForGeneral>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.firstName + " " + PropertyDetails?.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForGeneral variant="h6">Username</StyledTextForGeneral>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForGeneral variant="h6">
                Phone Number
              </StyledTextForGeneral>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.PhoneNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForGeneral variant="h6">Email</StyledTextForGeneral>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.email}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForGeneral variant="h6">
                Property Verified status
              </StyledTextForGeneral>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.verifiedProperty ? "Approved" : "Pending"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForGeneral variant="h6">
                Property Details Verified status
              </StyledTextForGeneral>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.PropertDetailsVerified
                  ? "Approved"
                  : "Pending"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <StyledTextForGeneral variant="h6">
                Property Listed for verification at :
              </StyledTextForGeneral>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.DateAndTime}
              </Typography>
            </Grid>
          </Grid>
        </StyledBoxForGeneral>
        <StyledBoxForPropertyInfo>
          <Typography
            sx={{ textAlign: "center", marginBottom: "2rem" }}
            variant="h3"
          >
            Property Information
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                Property Name:
              </StyledTextForProperty>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.PropertyName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                PropertyID
              </StyledTextForProperty>
              <Typography style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {PropertyDetails?.id}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                Distance from City Center:
              </StyledTextForProperty>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {PropertyDetails?.distanceFromMainCity} KM
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                Distance from Airport:
              </StyledTextForProperty>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {PropertyDetails?.distanceFromAirport} KM
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                Total Number of Bedrooms:
              </StyledTextForProperty>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {PropertyDetails?.Total_number_of_bedrooms}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                Total Number of Bed:
              </StyledTextForProperty>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {PropertyDetails?.Number_of_beds}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                City Name:
              </StyledTextForProperty>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {PropertyDetails?.city}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <StyledTextForProperty variant="h6">
                Country Name:
              </StyledTextForProperty>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {PropertyDetails?.country}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <StyledTextForProperty variant="h6">
                Address:
              </StyledTextForProperty>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {PropertyDetails?.Address}
              </Typography>
            </Grid>
          </Grid>
        </StyledBoxForPropertyInfo>
        <div>
          <StyledBoxForDocumnetImage>
            <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
              Government Proof of Property
            </Typography>
            <Button onClick={handleClickOpen} sx={{ cursor: "pointer" }}>
              <Image
                src={PropertyDetails?.uploadedImageDoc}
                width={700}
                height={500}
                alt="Document Image"
                loading="lazy"
              />
            </Button>
          </StyledBoxForDocumnetImage>

          <Dialog
            open={open}
            maxWidth="lg"
            onClose={handleClose}
            PaperProps={{
              style: {
                overflow: "scroll",
              },
            }}
          >
            <Zoom in={open}>
              <Image
                src={PropertyDetails?.uploadedImageDoc}
                alt="Document Image"
                width={500}
                height={700}
                loading="lazy"
              />
            </Zoom>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            >
              <CloseOutlinedIcon
                sx={{ width: "5rem", height: "5rem", color: "#000" }}
              />
            </IconButton>
          </Dialog>
        </div>
      </StyledPaperPV>
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
          sx={{
            width: "10rem",
            backgroundColor: "red",
            marginRight: "1rem",
            marginLeft: "1rem",
          }}
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
              Are you sure you want to reject this property?
              <br />
              <strong>
                {" "}
                Note: The Contents of Vendor and their Property will be deleted
                and there is no going back
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
          disabled={PropertyDetails?.verifiedProperty}
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
              Are you sure you want to approve this property?
            </DialogContentText>
            <Box>
              <TextField
                label="Recipient's Name"
                value={PropertyDetails?.firstName}
                disabled
                fullWidth
                sx={{ marginTop: "2rem" }}
              />
              <TextField
                label="Recipient's Email"
                value={PropertyDetails?.email}
                disabled
                fullWidth
                sx={{ marginTop: "1rem" }}
              />
              <TextField
                label="Message"
                multiline
                fullWidth
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ marginTop: "1rem" }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setDialogForConfirmationOpen(false)}
              color="primary"
            >
              Cancel
            </Button>
            <Button onClick={handleConfirm} color="primary">
              Approve
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </StyledContainerPV>
  );
};

export default PropertyVerficationComponent;
