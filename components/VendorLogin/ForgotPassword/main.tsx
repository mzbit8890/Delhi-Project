import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Alert from "@mui/material/Alert";
export default function ForgotPasswordComponent() {
  const [email, setEmail] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        "https://api.hostelbird.com/vendor/generateToken",
        {
          Email: email,
        }
      );
      setAlertOpen(true);
      if (response.data.success) {
        setError(false);
        setAlertMessage(
          "Your Request has been generated. Please check your email"
        );
      } else {
        setError(true);
        setAlertMessage("Oops! This Email is not linked to any vendor");
      }
    } catch (error) {
      setAlertOpen(true);
      setError(true);
      console.error("Error resetting password:", error);
      setAlertMessage("Something went wrong. Please try again later.");
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
        {alertOpen && !error ? (
          <Alert
            variant="standard"
            severity="success"
            onClose={handleAlertClose}
            sx={{ m: "1rem" }}
          >
            {alertMessage}
          </Alert>
        ) : alertOpen && error ? (
          <Alert
            variant="standard"
            severity="error"
            onClose={handleAlertClose}
            sx={{ m: "1rem" }}
          >
            {alertMessage}
          </Alert>
        ) : null}

        <Typography variant="h5" gutterBottom>
          Forgot Your Password?
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Enter your email address below to reset your password.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            id="email"
            label="Email Address"
            variant="outlined"
            autoComplete="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
