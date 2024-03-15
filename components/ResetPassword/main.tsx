import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ResetPasswordComponent() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    code: "",
  });
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async () => {
    const { password } = formData;

    if (password !== confirmPassword) {
      setError(true);
      setAlertOpen(true);
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.hostelbird.com/vendor/forgotPassword",
        {
          data: formData,
        }
      );

      if (response.data.success) {
        setAlertOpen(true);
        setSuccessMessage("Password reset successfully");
        setTimeout(() => {
          router.push("/vendor-login");
        }, 500);
      } else {
        setError(true);
        setAlertOpen(true);
        setErrorMessage("Invalid Information");
      }
    } catch (error) {
      setAlertOpen(true);
      setError(true);
      setErrorMessage("Something went wrong Please try again later.");
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
          <Alert severity="success" onClose={handleAlertClose} sx={{ mt: 2 }}>
            {successMessage}
          </Alert>
        ) : alertOpen && error ? (
          <Alert severity="error" onClose={handleAlertClose} sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        ) : null}
        <Typography variant="h5" gutterBottom>
          Reset Your Password
        </Typography>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          value={formData?.username}
          onChange={(e: any) => handleFieldChange(e, "username")}
        />
        <TextField
          fullWidth
          id="code"
          name="code"
          label="Verification Code"
          variant="outlined"
          margin="normal"
          type="text"
          value={formData?.code}
          onChange={(e: any) => handleFieldChange(e, "code")}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={formData?.password}
          onChange={(e: any) => handleFieldChange(e, "password")}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

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
