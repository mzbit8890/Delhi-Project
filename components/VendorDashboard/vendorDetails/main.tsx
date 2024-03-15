import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const VendorDetails = () => {
  let VendorEmail = useSelector(
    (state: any) => state?.vendor?.vendorNameForVendorDashboard
  );
  VendorEmail.replace("@", "%40");
  const vendorFirstName = useSelector(
    (state: any) => state?.vendor?.VendorName
  );
  const [formData, setFormData] = useState({
    username: VendorEmail,
    firstName: vendorFirstName,
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [showalert, setShowAlert] = useState({
    nature: "",
    success: "false",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      data: {
        ...(formData.username !== VendorEmail && {
          username: formData.username,
        }),
        ...(formData.firstName && { firstName: formData.firstName }),
        ...(formData.lastName && { lastName: formData.lastName }),
        ...(formData.password && { password: formData.password }),
      },
      vendorEmail: VendorEmail,
    };
    try {
      const response = await axios.patch(
        "https://api.hostelbird.com/vendor/updateFields",
        payload,
        {
          withCredentials: true,
        }
      );
      if (response.data.message === "Fields have been updated") {
        setShowAlert({
          nature: "success",
          success: "true",
        });
      } else if (response.data.UniqueEmail === false) {
        setShowAlert({
          nature: "error",
          success: "false",
        });
      } else {
        setShowAlert({
          nature: "error",
          success: "false",
        });
      }
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 8,
          p: 6,
          border: "1px solid #ccc",
          borderRadius: 12,
          boxShadow: 2,
          mb: "5rem",
        }}
      >
        {showalert.success === "true" ? (
          <>
            <Alert
              onClose={() =>
                setShowAlert({
                  nature: "any",
                  success: "null",
                })
              }
              severity="success"
              variant="standard"
            >
              Success
            </Alert>
          </>
        ) : showalert.success === "false" && showalert.nature === "error" ? (
          <>
            <Alert
              onClose={() =>
                setShowAlert({
                  nature: "any",
                  success: "null",
                })
              }
              severity="error"
              variant="standard"
            >
              Something went wrong
            </Alert>
          </>
        ) : showalert.success === "null" ? (
          ""
        ) : (
          ""
        )}
        <Typography
          sx={{ mb: "2rem" }}
          variant="h4"
          align="center"
          gutterBottom
        >
          Vendor Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ sx: { borderRadius: "1rem" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ sx: { borderRadius: "1rem" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ sx: { borderRadius: "1rem" } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="password"
                label="New Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                error={formData.password !== formData.confirmPassword}
                InputProps={{ sx: { borderRadius: "1rem" } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="password"
                label="Confirm New Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ sx: { borderRadius: "1rem" } }}
                error={formData.password !== formData.confirmPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Update Details
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default VendorDetails;
