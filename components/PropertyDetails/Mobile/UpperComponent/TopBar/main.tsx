import { Box, Button, DialogProps, Rating, Typography } from "@mui/material";
import { MainBox, PropertyNameText, TOPPaper } from "./index.style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Raleway } from "next/font/google";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function TopBarComponentMobile() {
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  const PropertyName = pathNameArray[3];
  const cleanedPropertyName = PropertyName.replace(/%20/g, " ");

  const goBack = () => {
    window.history.back();
  };
  return (
    <MainBox>
      <TOPPaper elevation={1}>
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          <Button onClick={goBack}>
            <KeyboardBackspaceIcon sx={{ color: "#000" }} />
          </Button>
        </Link>
        <PropertyNameText
          className={`${raleway.variable}`}
          sx={{
            fontFamily: "var(--font-raleway)",
            marginLeft: "1rem",
          }}
        >
          {cleanedPropertyName.length > 20
            ? cleanedPropertyName.slice(0, 20) + "..."
            : cleanedPropertyName}
        </PropertyNameText>
      </TOPPaper>
    </MainBox>
  );
}
