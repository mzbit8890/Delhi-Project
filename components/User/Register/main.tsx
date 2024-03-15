import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Checkbox, MenuItem } from "@mui/material";
import ThankYouPage from "./ThankYou";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";

const defaultTheme = createTheme();

interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  Country: string;
  city: string;
  email: string;
  password: string;
}

export default function RegisterUserComponent() {
  const session = useSession();
  const route = useRouter();

  const [user, setUser] = useState<UserData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    Country: "",
    city: "",
    email: "",
    password: "",
  });

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCity, setSelectedCity] = useState("Delhi");

  const [GoogleUserExists, setGoogleUserExists] = useState(false);
  const [errorStateForPhoneNumber, setErrorPNState] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const NameOfCountries: any = [
    "India",
    "Mexico",
    "UAE",
    "USA",
    "Germany",
    "Spain",
  ];

  const NameOfCities: any = {
    India: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
    Mexico: ["Mexico City", "Guadalajara", "Monterrey"],
    UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
    USA: ["New York", "Los Angeles", "Chicago"],
    Germany: ["Berlin", "Munich", "Hamburg"],
    Spain: ["Madrid", "Barcelona", "Valencia"],
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setUser((prevUser) => ({
      ...prevUser,
      Country: selectedCountry,
      city: "",
    }));
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    setUser((prevUser) => ({
      ...prevUser,
      city: selectedCity,
    }));
  };

  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    if (name === "phoneNumber") {
      if (value.startsWith("+") || value.replace(/\D/g, "").length !== 10) {
        setErrorPNState(true);
      } else {
        setErrorPNState(false);
      }
    }
    if (name === "email") {
      if (value?.length < 5 || !value?.includes("@")) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
    }
    if (name === "password") {
      const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      const uppercaseRegex = /[A-Z]/;

      if (
        value.length < 8 ||
        !specialCharacterRegex.test(value) ||
        !uppercaseRegex.test(value)
      ) {
        setErrorPassword(true);
      } else {
        setErrorPassword(false);
      }
    }
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let postData;
      if (
        googleAuthUser.GoogleUser &&
        session.status === "authenticated" &&
        !GoogleUserExists
      ) {
        postData = googleAuthUser;
      } else if (GoogleUserExists && session.status === "authenticated") {
        route.push("sign-in");
        return;
      } else {
        postData = user;
      }

      const response = await fetch(
        "https://api.hostelbird.com/user/createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
          credentials: "include",
          mode: "cors",
        }
      );

      if (response.ok) {
        alert("Success");
        setShowThankYou(true);
      } else {
        alert("Failed to create user");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  const [googleAuthUser, setGoogleAuthUser] = useState({
    googleUsername: "",
    googleEmail: "",
    GoogleUser: true,
    phoneNumber: "",
    Country: "",
    city: "",
  });
  const handleInputChangeGoogleAuth = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setGoogleAuthUser((prevGoogleAuthUser) => ({
      ...prevGoogleAuthUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (googleAuthUser?.googleUsername) {
      const checkUserExists = async () => {
        try {
          const response = await fetch(
            `https://api.hostelbird.com/user/checkUserExits/${googleAuthUser?.googleUsername}`
          );

          if (response.ok) {
            const data = await response.json();
            if (data?.exists) {
              setGoogleUserExists(true);
            }
          } else {
            setGoogleUserExists(false);
          }
        } catch (error) {
          alert("Error checking user existence:");
        }
      };
      checkUserExists();
    }
  });

  React.useEffect(() => {
    if (session.status === "authenticated" && !GoogleUserExists) {
      setGoogleAuthUser({
        googleUsername: session?.data.user?.name as string,
        googleEmail: session?.data?.user?.email as string,
        GoogleUser: true,
        phoneNumber: "",
        Country: "",
        city: "",
      });
    }
    if (session.status === "authenticated" && GoogleUserExists) {
      route.push("/");
    }
  }, [
    session?.status,
    session?.data?.user?.name,
    session?.data?.user?.email,
    googleAuthUser.googleUsername,
    GoogleUserExists,
  ]);

  return !showThankYou ? (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            margin: "2rem 0rem 2rem 0rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30rem",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ m: "1rem" }} component="h1" variant="h5">
            Register Now Birdie
          </Typography>

          {googleAuthUser.GoogleUser &&
          session.status === "authenticated" &&
          !GoogleUserExists ? (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={googleAuthUser?.googleUsername}
                    fullWidth
                    label="Username"
                    id="googleUsername"
                    name="googleUsername"
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={googleAuthUser?.googleEmail}
                    required
                    fullWidth
                    id="googleEmail"
                    label="Email Address"
                    name="googleEmail"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    value={googleAuthUser?.phoneNumber || ""}
                    onChange={handleInputChangeGoogleAuth}
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    autoComplete="tel"
                    error={errorStateForPhoneNumber}
                    helperText={
                      errorStateForPhoneNumber
                        ? "Phone number should not contain a country code or length should be 10"
                        : "10 digits"
                    }
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    select
                    value={googleAuthUser?.Country || ""}
                    onChange={handleInputChangeGoogleAuth}
                    required
                    fullWidth
                    id="Country"
                    label="Country"
                    name="Country"
                    autoComplete="country"
                  >
                    {NameOfCountries.sort().map((country: string) => (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    select
                    value={googleAuthUser?.city || ""}
                    onChange={handleInputChangeGoogleAuth}
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="address-level2"
                    disabled={!googleAuthUser.Country}
                  >
                    {NameOfCities[selectedCountry]
                      .sort()
                      .map((city: string) => (
                        <MenuItem key={city} value={city}>
                          {city}
                        </MenuItem>
                      ))}
                  </TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!googleAuthUser}
              >
                Continue
              </Button>
            </form>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={user.firstName}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={user.lastName}
                      onChange={handleInputChange}
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={user.phoneNumber}
                      onChange={handleInputChange}
                      required
                      fullWidth
                      id="phoneNumber"
                      label="Phone Number"
                      name="phoneNumber"
                      autoComplete="tel"
                      error={errorStateForPhoneNumber}
                      helperText={
                        errorStateForPhoneNumber
                          ? "Phone number should not contain a country code or length should be 10"
                          : "10 digits"
                      }
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      value={user.Country}
                      onChange={handleCountryChange}
                      required
                      fullWidth
                      id="Country"
                      label="Country"
                      name="Country"
                      autoComplete="country"
                    >
                      {NameOfCountries.sort().map((country: string) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      select
                      value={user.city}
                      onChange={handleCityChange}
                      required
                      fullWidth
                      id="city"
                      label="City"
                      name="city"
                      autoComplete="address-level2"
                      disabled={!user.Country}
                    >
                      {NameOfCities[selectedCountry]
                        .sort()
                        .map((city: string) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={user.email}
                      onChange={handleInputChange}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={errorEmail}
                      helperText={
                        errorEmail
                          ? "Input Text Not Email Type"
                          : "Please Enter a valid Email"
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={user.password}
                      onChange={handleInputChange}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      error={errorPassword}
                      helperText={
                        errorPassword
                          ? "Password must contain at least 8 characters, 1 special character, and 1 uppercase letter"
                          : "Enter a secure password"
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleInputChange}
                          color="primary"
                          name="allowExtraEmails"
                        />
                      }
                      label="I have read all terms and conditions of Hostel Bird and I agree to continue"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="sign-in" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
              <Button
                onClick={handleGoogleSignIn}
                fullWidth
                variant="contained"
                color="primary"
                sx={{ m: 2, backgroundColor: "#fff", color: "#000" }}
              >
                <GoogleIcon sx={{ color: "#4285F4", mr: "0.5rem" }} /> Sign Up
                with Google
              </Button>
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  ) : (
    <ThankYouPage />
  );
}
