import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ImageStyle,
  StyledContainer,
  StyledHeaderLeftBox,
  StyledHeaderRightBox,
  StyledSubContainer1,
  StyledSubContainer2,
} from "../index.style";
import Image from "next/image";
import kashmir from "@/assests/AdminLogin.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  username: string;
  FullName: string;
  password: string;
}
export default function AdminLoginComponent() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<keyof FormData, boolean>>({
    username: false,
    FullName: false,
    password: false,
  });
  const [formData, setFormData] = useState<FormData>({
    username: "",
    FullName: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isFormValid = Object.values(errors).every((error) => !error);
    if (!isFormValid) {
      return;
    }

    try {
      const response = await fetch(
        "https://api.hostelbird.com/AdminHostelBird-dashboard/loginForAdmin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        router.push("/admin-main/dashboard-restricted");
      } else {
        console.error("Login failed:", response);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormData
  ) => {
    const { value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
    if (value === "") {
      setErrors({ ...errors, [fieldName]: true });
    } else {
      setErrors({ ...errors, [fieldName]: false });
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledSubContainer1>
          <StyledHeaderLeftBox>
            <Typography
              sx={{
                display: "flex",
                marginTop: "1rem",
                textAlign: "center",
                fontFamily: "Poppins,Helvetica",
                fontWeight: "bold",
              }}
              variant="h3"
            >
              Admin Login
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#fff",
                fontFamily: "Poppins,Helvetica",
                fontWeight: "light",
              }}
            >
              where the magic happens.
            </Typography>
            <Box sx={{ marginTop: "0.5rem" }}>
              <Image
                src={kashmir}
                alt="AdminLogin"
                style={ImageStyle}
                loading="lazy"
              />
            </Box>
          </StyledHeaderLeftBox>
        </StyledSubContainer1>
        <StyledSubContainer2>
          <Box
            sx={{ display: "flex", flexDirection: "column", margin: "0 10rem" }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins,Helvetica",
                textAlign: "center",
              }}
              variant="h4"
            >
              Welcome to <span style={{ color: "#3D66F8" }}> Hostel Bird </span>
            </Typography>
            <Box>
              <Box
                component="form"
                noValidate
                sx={{ marginTop: "2rem" }}
                onSubmit={handleSubmit}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  error={errors.username}
                  helperText={
                    errors.username
                      ? "Username is required"
                      : "Username must be at least 5 characters"
                  }
                  inputProps={{ minLength: 4 }}
                  onChange={(e) => handleInputChange(e as any, "username")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Fullname"
                  label="Full Name"
                  name="FullName"
                  autoComplete="Fullname"
                  error={errors.FullName}
                  onChange={(e) => handleInputChange(e as any, "FullName")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={errors.password}
                  helperText={
                    errors.username
                      ? "Password is required"
                      : "Password must be at least 8 characters"
                  }
                  onChange={(e) => handleInputChange(e as any, "password")}
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#7f00ff" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </StyledSubContainer2>
      </StyledContainer>
    </>
  );
}
