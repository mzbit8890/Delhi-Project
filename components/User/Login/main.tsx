import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import { ThemeProvider } from "@mui/material/styles";
import {
  InputAdornment,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
} from "@mui/material";
import {
  LeftGrid,
  RightGrid,
  LeftGridBox,
  LoginButton,
  GoogleLoginButton,
  LoginImage,
  MainGrid,
  Title1Typography,
  Title2Typography,
  SubtitleTypography,
  WrapperBox,
  LineDivider,
} from "./main.style";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";

import { setLoggedInUserForDashboard } from "@/Store/UserSlice";
import { theme } from "@/theme/theme";
import googleicon from "@/../../assests/SignIn/googleicon.png";
import Hbicon from "@/assests/HbIcon.png";
import Navbar from "@/components/Navbar/Navbar";

export default function SignInSide() {
  const dispatch = useDispatch();
  const router = useRouter();
  const session = useSession();

  interface UserCredentials {
    username: string;
    password: string;
  }

  const [googleAuthUserCred, setGoogleAuthUserCred] = useState({
    googleUsername: "",
    googleEmail: "",
    googleUserExists: false,
  });
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const checkUserExists = async () => {
    try {
      if (googleAuthUserCred?.googleUsername) {
        try {
          const response = await fetch(
            `https://api.hostelbird.com/user/checkUserExits/${googleAuthUserCred?.googleUsername}`,
            {
              credentials: "include",
              mode: "cors",
            }
          );

          if (response.ok) {
            const data = await response.json();
            if (data?.exists) {
              googleAuthUserCred.googleUserExists = true;
              return;
            } else {
              googleAuthUserCred.googleUserExists = false;
              return;
            }
          } else {
            googleAuthUserCred.googleUserExists = false;
          }
        } catch (error) {
          alert(error);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await checkUserExists();
        const isAuthenciated = session.status;
        if (isAuthenciated === "authenticated") {
          setGoogleAuthUserCred({
            googleUsername: session?.data.user?.name as string,
            googleEmail: session?.data?.user?.email as string,
            googleUserExists: true,
          });
          if (!googleLoginSuccessful) {
            await handleSubmit(null);
          }
        }
      } catch (error) {
        alert("Error while rerendering");
      }
    };

    fetchData();
  }, [session, googleAuthUserCred]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserCredentials((prevCredentials: any) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const [googleLoginSuccessful, setGoogleLoginSuccessful] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement> | null
  ) => {
    event?.preventDefault();

    try {
      if (
        session.status === "authenticated" &&
        !googleAuthUserCred.googleUserExists &&
        googleAuthUserCred.googleUsername
      ) {
        console.log(
          googleAuthUserCred.googleUserExists,
          googleAuthUserCred.googleUsername
        );

        router.push("register");
        return;
      }
      if (
        session.status === "authenticated" &&
        googleAuthUserCred.googleUserExists &&
        !googleLoginSuccessful
      ) {
        const response = await fetch(
          "https://api.hostelbird.com/user/loginUserUsingGoogle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              googleUsername: googleAuthUserCred?.googleUsername,
              googleEmail: googleAuthUserCred?.googleEmail,
              isAuth: true,
            }),
            credentials: "include",
            mode: "cors",
          }
        );
        if (response.ok) {
          setGoogleLoginSuccessful(true);
          dispatch(
            setLoggedInUserForDashboard(googleAuthUserCred.googleUsername)
          );
          router.push("/");
        } else {
          alert("Google Login failed");
          alert("Error");
          return;
        }
      } else if (userCredentials.username && userCredentials.password) {
        const response = await fetch(
          "https://api.hostelbird.com/user/LoginUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userCredentials),
            credentials: "include",
          }
        );

        if (response.ok) {
          alert("Login successful!");
          router.push("/");
          return;
        } else {
          alert("Login failed");
          alert("Error");
          return;
        }
      }
    } catch (error) {
      alert("Error during login");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MainGrid mt={10} mb={{ xs: 10, lg: 0 }} container>
        <CssBaseline />
        <LeftGrid item xs={12} sm={12} md={6} order={{ xs: 2, md: 1 }}>
          <LeftGridBox>
            <Box>
              <Title1Typography my={2} variant="h4">
                <Image alt="logo" src={Hbicon} width={50} height={50} />
                Hostel Bird
              </Title1Typography>
              <Title2Typography variant="h4">
                Welcome Traveller
              </Title2Typography>
              <SubtitleTypography my={2} variant="body1">
                Log in to unlock extras and start connecting with travelers
                heading to your hostel
              </SubtitleTypography>
              <Box component="form" noValidate onSubmit={handleSubmit} mt={1}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  autoComplete="firstName"
                  autoFocus
                  onChange={handleInputChange}
                  value={userCredentials.username}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Link href="/" color="greyish.main" mt={1}>
                          <MailOutlinedIcon />
                        </Link>
                      </InputAdornment>
                    ),
                    style: {
                      borderRadius: "50px",
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                  value={userCredentials.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Link href="/" color="greyish.main" mt={1}>
                          <RemoveRedEyeRoundedIcon />
                        </Link>
                      </InputAdornment>
                    ),
                    style: {
                      borderRadius: "50px",
                    },
                  }}
                />
                <WrapperBox>
                  <FormControlLabel
                    control={<Checkbox value="remember" />}
                    label="Keep me logged in"
                  />
                  <Link
                    href="#"
                    variant="body2"
                    color="peach.main"
                    underline="none"
                  >
                    {"Forgot password?"}
                  </Link>
                </WrapperBox>
                <LoginButton type="submit" fullWidth variant="contained">
                  Log In
                </LoginButton>
                <LineDivider>or</LineDivider>
              </Box>
              <GoogleLoginButton
                onClick={() => {
                  signIn("google");
                }}
                fullWidth
                variant="contained"
              >
                <Image
                  alt="googleicon"
                  src={googleicon}
                  width={40}
                  height={40}
                />{" "}
                Log In with Google
              </GoogleLoginButton>
              <Box mt={2} sx={{ textAlign: "center" }}>
                <Link
                  href="register"
                  variant="body2"
                  color="peach.main"
                  underline="none"
                >
                  {"Dont have an account? Sign Up"}
                </Link>
              </Box>
            </Box>
          </LeftGridBox>
        </LeftGrid>
        <RightGrid item xs={12} sm={6} md={6} order={{ xs: 1, md: 2 }}>
          <LoginImage>
            <Image
              alt="loginimg"
              src="https://source.unsplash.com/random?travel"
              width={500}
              height={500}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </LoginImage>
          {/* <Image src={loginimg} alt="loginimg" style={{width: '100%', height: 'auto'}}/> */}
        </RightGrid>
      </MainGrid>
    </ThemeProvider>
  );
}
