import React from "react";
import { Typography } from "@mui/material";
import animationData from "./Animation - 1705932956200.json";
import Lottie from "react-lottie";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const BirdLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        marginTop: "5rem",
      }}
    >
      <Lottie
        options={defaultOptions}
        height={25 * 16}
        width={25 * 16}
        style={{ marginBottom: "20px" }}
      />
      <Typography
        className={`${poppins.variable}`}
        sx={{ fontFamily: "var(--font-poppins)" }}
        variant="body2"
        color="textSecondary"
      >
        Loading...
      </Typography>
    </div>
  );
};
