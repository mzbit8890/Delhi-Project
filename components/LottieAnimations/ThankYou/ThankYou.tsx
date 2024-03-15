import React from "react";
import { Button, Typography } from "@mui/material";
import animationData from "./Animation - 1707319225393.json";
import animationData2 from "./Animation - 1707319868556.json";
import Lottie from "react-lottie";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const ThankYouComponent = () => {
  const router = useRouter();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
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
      <div style={{ position: "absolute", top: 100 }}>
        <Lottie
          options={defaultOptions}
          height={25 * 16}
          width={30 * 16}
          style={{ marginBottom: "5px" }}
        />
      </div>
      <div style={{ position: "absolute", top: 0 }}>
        <Lottie
          options={defaultOptions2}
          height={45 * 16}
          width={30 * 16}
          style={{ marginBottom: "5px" }}
        />
      </div>
      <Button
        sx={{
          border: "1px solid #3D66F8",
          color: "#3D66F8",
          borderRadius: "0.5rem",
          p: "0.5rem",
          mt: "23rem",
        }}
        onClick={() => router.push("/")}
      >
        Back To Home
      </Button>
    </div>
  );
};
