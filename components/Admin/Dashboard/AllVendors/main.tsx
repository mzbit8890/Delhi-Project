// pages/VendorsByCountry.tsx

import { useState, useEffect, useLayoutEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import { useDispatch } from "react-redux";
import {
  setVendorNameForAdmin,
  setPropertyNameForAdmin,
} from "@/Store/AdminSlice";
import { NameOfCountries } from "../../NameofCountiesAndCities/CountiesAndCities";
import { GeTAdmin } from "../../Auth/Auth";
interface Vendor {
  username: string;
  country: string;
  PropertyName: string;
}

const VendorsByCountry = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("India");

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
    fetchVendors();
  }, [selectedCountry]);

  const fetchVendors = async () => {
    try {
      const response = await fetch(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/getVendorByCountry/${selectedCountry}`,
        {
          credentials: "include",
          mode: "cors",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setVendors(data);
      } else {
        setVendors([]);
      }
    } catch (error) {
      console.error("Error fetching vendors", error);
    }
  };
  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.target.value as string);
  };

  return (
    <Container>
      <Typography sx={{ mt: "1rem" }} variant="h5" align="left">
        Showing {vendors.length} vendors in {selectedCountry}
      </Typography>
      <Typography
        variant="h2"
        sx={{ mt: "1rem", mb: "1rem" }}
        textAlign={"center"}
      >
        Vendors by Country
      </Typography>

      <Select
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "center",
          fontSize: "2.2rem",
        }}
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        {NameOfCountries?.map((country: string, index: number) => (
          <MenuItem value={country} key={index}>
            {country}
          </MenuItem>
        ))}
      </Select>

      <Grid container spacing={2}>
        {vendors.length === 0 ? (
          <Typography
            textAlign={"center"}
            sx={{ display: "flex", margin: "0 auto", mt: "5rem" }}
            variant="h2"
          >
            No Vendors found{" "}
            <MinorCrashIcon
              sx={{ ml: "1rem", color: "grey", height: "4rem", width: "4rem" }}
            />
          </Typography>
        ) : (
          vendors?.map((vendor, index) => (
            <Grid sx={{ mt: "1rem" }} item key={index} xs={6} md={3} lg={3}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                }}
                elevation={10}
              >
                <Typography sx={{ fontWeight: "lighter", fontSize: "0.81rem" }}>
                  Username:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {" "}
                    {vendor.username}{" "}
                  </span>{" "}
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    mb: "1rem",
                    fontWeight: "lighter",
                    fontSize: "0.81rem",
                  }}
                >
                  Property Name:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {" "}
                    {vendor.PropertyName}{" "}
                  </span>
                </Typography>
                <Typography sx={{ fontWeight: "lighter", fontSize: "0.81rem" }}>
                  Country:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {" "}
                    {vendor.country}{" "}
                  </span>
                </Typography>

                <Button
                  sx={{ backgroundColor: "#FF5F1F", mt: "1rem" }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    router.push(`vendorsdetails/${vendor.username}`),
                      dispatch(setVendorNameForAdmin(vendor?.username));
                    dispatch(setPropertyNameForAdmin(vendor?.PropertyName));
                  }}
                >
                  View
                </Button>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default VendorsByCountry;
