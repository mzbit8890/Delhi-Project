import Link from "@mui/material/Link";
import Login1 from "@/assests/Login1.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import {
  setLoggedInVendorForDashboard,
  PropertiesOfVendorForDashboard,
  setVendorID,
  setVendorName,
  SetLoginSuccess,
} from "@/Store/VendorSlice";
import SuccessComponent from "../SnackBar/Success";
import FailureComponentVendorLogin from "./SnackBar/Failure";

function ColorSchemeToggle({ onClick, ...props }: IconButtonProps) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      aria-label="toggle light/dark mode"
      {...props}
      onClick={(event: any) => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
        onClick?.(event);
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function LoginVendorAccountComponent() {
  const [username, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [passwordType, setpasswordType] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.hostelbird.com/vendor/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.error || !response.ok) {
        dispatch(SetLoginSuccess("LoginError"));
      } else {
        if (response.ok) {
          const { username, Properties, id, VendorName } = data;
          dispatch(setLoggedInVendorForDashboard(username));
          dispatch(PropertiesOfVendorForDashboard(Properties));
          dispatch(setVendorID(id));
          dispatch(setVendorName(VendorName));
          dispatch(SetLoginSuccess("LoginSuccess"));

          router.push(`/dashboard/${VendorName}`);
        }
      }
    } catch (error) {
      console.error("Login error", error);
    } finally {
      setLoading(false);
    }
  };
  const UpdateValue = useSelector((state: any) => state.vendor?.successValue);
  return (
    <Box sx={{ display: "flex" }}>
      {UpdateValue === "LogoutSuccess" ? (
        <SuccessComponent message="Logout Success" />
      ) : UpdateValue === "LoginError" ? (
        <FailureComponentVendorLogin />
      ) : (
        ""
      )}

      <CssVarsProvider defaultMode="light" disableTransitionOnChange>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ":root": {
              "--Collapsed-breakpoint": "769px",
              "--Cover-width": "50vw",
              "--Form-maxWidth": "800px",
              "--Transition-duration": "0.4s",
            },
          }}
        />
        <Box
          sx={(theme: any) => ({
            display: "flex",
            width:
              "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
            transition: "width var(--Transition-duration)",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            position: "relative",
            zIndex: 1,

            justifyContent: "flex-end",
            backdropFilter: "blur(15px)",
            backgroundColor: "rgba(255 255 255 / 0.2)",
            [theme.getColorSchemeSelector("dark")]: {
              backgroundColor: "rgba(19 19 24 / 0.4)",
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100dvh",
              width:
                "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
              maxWidth: "100%",
              px: 2,
            }}
          >
            <Box
              component="header"
              sx={{
                py: 3,
                display: "flex",
                alignItems: "left",
                justifyContent: "space-between",
              }}
            >
              <ColorSchemeToggle />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "1px solid",
                width: "10rem",
                height: "10rem",
                margin: "0 auto",
                marginBottom: "-5rem",
              }}
            >
              <Image
                src={Login1}
                alt="dp"
                style={{ height: "10rem", width: "10rem", borderRadius: "50%" }}
                loading="lazy"
              />
            </Box>
            <Box
              component="main"
              sx={{
                my: "auto",
                py: 2,
                pb: 5,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 400,
                maxWidth: "100%",
                mx: "auto",
                borderRadius: "sm",
                "& form": {
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                },
                [`& .${formLabelClasses.asterisk}`]: {
                  visibility: "hidden",
                },
              }}
            >
              <Stack gap={4} sx={{ mt: 2 }}>
                <form onSubmit={handleLogin}>
                  <FormControl required>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="username"
                      id="sername"
                      name="username"
                      onChange={(e) => setLoginUsername(e.target.value)}
                    />
                  </FormControl>
                  <FormControl required>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type={`${passwordType ? "password" : "name"}`}
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Stack gap={4} sx={{ mt: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        size="sm"
                        label="Show Password"
                        name="showpassword"
                        onClick={() => setpasswordType(!passwordType)}
                      />
                      <Link
                        sx={{ color: "#000" }}
                        href="/vendor-login/forgot-password"
                      >
                        Forgot your password?
                      </Link>
                    </Box>
                    <Button type="submit" fullWidth>
                      {!loading ? "Sign in" : <CircularProgress />}
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          sx={(theme: any) => ({
            display: "flex",
            height: "70%",
            position: "fixed",
            borderRadius: "1rem",
            right: 100,
            top: 150,
            bottom: 100,
            left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
            transition:
              "background-image var(--Transition-duration), left var(--Transition-duration) !important",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            backgroundColor: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(https://source.unsplash.com/random?hotels)",
            [theme.getColorSchemeSelector("dark")]: {
              backgroundImage:
                "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
            },
          })}
        />
      </CssVarsProvider>
    </Box>
  );
}
