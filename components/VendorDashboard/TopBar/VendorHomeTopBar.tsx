"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { Poppins } from "next/font/google";
import {
  clearPropertyDataStatus,
  updatePropertyStatus,
} from "@/Store/PropertySlice";
import { useState } from "react";
import { useEffect } from "react";
import HamburgerMenu from "@/components/AppBar/Hamburger";
import { useRouter } from "next/navigation";
import {
  PropertiesOfVendorForDashboard,
  ResetStore,
  SetPropertyIdForVendorDashboard,
  SetUpdateSuccess,
  setLoggedInVendorForDashboard,
  setVendorID,
  setVendorName,
} from "@/Store/VendorSlice";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function AppBarforVendor() {
  const router = useRouter();
  const dispatch = useDispatch();
  const VendorID = useSelector((state: any) => state.vendor?.VendorId);
  let username = useSelector(
    (state: any) => state?.vendor?.vendorNameForVendorDashboard
  );
  username.replace("@", "%40");

  const vendorName = useSelector((state: any) => state?.vendor?.VendorName);

  const Properties = useSelector(
    (state: any) => state.vendor?.PropertiesForVendorDashboard
  );

  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);

  const selectedProperty = Properties.find(
    (property: any) => property?.id === PropertyID
  );

  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";

  const apiUrl = `https://api.hostelbird.com/vendor/PropertyDetails/${username}/${SelectedPropertyName}`;
  const [lastUpdate, setLastUpdate] = React.useState("");
  const [propertyStatus, setPropertyStatus] = React.useState("");

  const LogoutVendor = async () => {
    const logoutResponse = await fetch(
      `https://api.hostelbird.com/vendor/logout/${VendorID}`,
      {
        method: "POST",
        credentials: "include",
        mode: "cors",
      }
    );
    if (logoutResponse.ok) {
      dispatch(SetUpdateSuccess("LogoutSuccess"));
      dispatch(ResetStore());
      dispatch(clearPropertyDataStatus());
      router.push("/vendor-login");
    } else {
      alert("Error");
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          credentials: "include",
          mode: "cors",
        });
        const data = await response.json();

        setLastUpdate(data.propertyDetails.LastUpdated);
        setPropertyStatus(data.PropertDetailsVerified);
        const propertyKeys = [
          "PropertyImages",
          "PropertyDescription",
          "PropertyEntertainment",
          "PropertyServices",
          "PropertyFacalities",
          "FoodAndDrinks",
          "checkIn",
          "checkout",
        ];
        propertyKeys.forEach((property: any) => {
          const propertyData =
            data.propertyDetails && data.propertyDetails[property];
          const propertyLength = propertyData ? propertyData.length : 0;

          dispatch(
            updatePropertyStatus({ property, status: propertyLength > 0 })
          );
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl, dispatch]);

  return (
    <>
      <Box sx={{ mb: "-4rem" }}>
        <HamburgerMenu />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          height: "30vh",
          background: `linear-gradient(to top left, #6DAEDB, transparent), 
            linear-gradient(to top right, #AFCBEB, transparent), 
            linear-gradient(to bottom left, #AFCBEB, transparent), 
            linear-gradient(to bottom right, #F2F2F2, transparent), 
            #F2F2F2`,

          overflow: "hidden",
          borderRadius: "1rem",
          mt: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15%",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              className={`${poppins.variable}`}
              sx={{
                fontWeight: "bold",
                fontFamily: "var(--font-poppins)",
                color: "#000",
              }}
              variant="h4"
            >
              Welcome to Hostel{" "}
              <span
                className={`${poppins.variable}`}
                style={{
                  color: "#3D66F8",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Bird
              </span>
            </Typography>
            <Box
              className={`${poppins.variable}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "0.5rem",
                marginLeft: "2rem",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{ fontFamily: "var(--font-poppins)" }}
                >
                  Property Status :
                </Typography>
                {propertyStatus ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography sx={{ fontFamily: "var(--font-poppins)" }}>
                      Verified
                    </Typography>
                    <CheckIcon />
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ fontFamily: "var(--font-poppins)" }}>
                      Not Verfied
                    </Typography>{" "}
                    <CloseIcon />
                  </Box>
                )}
              </Box>

              <Typography
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
              >
                Last Updated :{lastUpdate}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",

                justifyContent: "right",
                marginLeft: "auto",
                marginTop: "1rem",
                marginRight: "2rem",
                color: "#000",
                flexDirection: "column",
              }}
            >
              <Typography
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
              >
                {username}
              </Typography>
              <Button
                variant="text"
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                onClick={LogoutVendor}
              >
                Logout
              </Button>
            </Box>
          </Box>
          <Divider sx={{ color: "#000", width: "70rem", marginTop: "1rem" }} />
        </Box>
        <Box sx={{ color: "#000", marginTop: "1rem", marginLeft: "10rem" }}>
          <List>
            <ListItem>
              <ListItemButton
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                href={`/dashboard/${vendorName}`}
              >
                Home
              </ListItemButton>
              <ListItemButton
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                href={`/dashboard/${vendorName}/vendorDetails`}
              >
                Update Profile
              </ListItemButton>
              <ListItemButton
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                href={`/dashboard/${vendorName}/PropertyDetails`}
              >
                My Property Details
              </ListItemButton>

              <ListItemButton
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                href={`/dashboard/${vendorName}/bookings`}
              >
                Booking
              </ListItemButton>
              <ListItemButton
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                href={`/dashboard/${vendorName}/viewRooms`}
              >
                My Rooms
              </ListItemButton>
              <ListItemButton
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                href={`/dashboard/${vendorName}/newPropertyForm`}
              >
                Add New Property
              </ListItemButton>
              <ListItemButton
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                onClick={() => window.open("/Contact-us", "_blank")}
              >
                Contact Support
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
