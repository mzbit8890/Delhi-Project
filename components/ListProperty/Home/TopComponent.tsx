import * as React from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import backgroundImage from "@/assests/Kashmir.jpg";
import Traveller from "@/assests/Traveller.png";
import HowItWorksComponent from "./BottomComponent";
import MiddleComponent from "./MiddleComponent";

// const backgroundImage =
//   "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function TopComponent() {
  const HandleScrollToLearnMore = () => {
    const priceSection = document.getElementById("How-it-works");
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 1,
          height: "4rem",
          backgroundColor: "#5CD2E6",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-2rem",
        }}
      >
        <Typography
          sx={{ marginRight: "1rem", color: "#fff", fontWeight: "bolder" }}
          variant="h4"
        >
          Ready to start?{" "}
        </Typography>
        <Button
          sx={{
            backgroundColor: "purple",
            width: "10rem",
            borderRadius: "1rem",
            height: "3rem",
          }}
          variant="contained"
          color="primary"
          href="/listProperty/register-form"
        >
          Sign Up
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
          marginLeft: "4rem",
        }}
      >
        <Box sx={{ marginRight: "5rem", width: "45%" }}>
          <Typography
            sx={{ fontSize: "4rem", fontWeight: "bolder" }}
            variant="h3"
          >
            Calling all Birdies
            <span style={{ color: "#5CD2E6" }}> Experience budget </span> travel
            like never before
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300 }} marginTop={2}>
            Fill your hostel with travellers who love to socialise and spend
            more.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "purple",
              color: "#fff",
              marginTop: "1rem",
              width: "10rem",
              height: "3rem",
              borderRadius: "1rem",
            }}
            onClick={HandleScrollToLearnMore}
          >
            Learn More
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginLeft: "2rem",
          }}
        >
          <Image
            alt="Traveller Image"
            style={{
              width: "30rem",
              height: "30rem",
              marginTop: "-5rem",
            }}
            src={Traveller}
            loading="lazy"
          />
        </Box>
      </Box>
      <div id="ProductCategories">
        <MiddleComponent />
      </div>
      <div id="How-it-works">
        <HowItWorksComponent />
      </div>
    </>
  );
}
