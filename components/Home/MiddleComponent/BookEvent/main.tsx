import { Box, Button, Typography } from "@mui/material";
import {
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  StyledSubText,
  StyledText,
} from "./index.style";

import Image from "next/image";
import img1 from "@/assests/homepageimage1.png";
import img2 from "@/assests/homepageimage2.png";
import { Poppins } from "next/font/google";
import { useMediaQuery } from "@mui/material";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function BookEventComponent() {
  const isMobile = useMediaQuery("(min-width:600px) and(max-width:900px)");
  const isSmallMobile = useMediaQuery("(max-width:599px)");
  const isTab = useMediaQuery("(min-width:899px) and (max-width:1199px)");
  const isBig = useMediaQuery("(min-width:1200px)");

  const containerStyle: React.CSSProperties = {
    ...(isSmallMobile
      ? { width: "8rem", height: "4rem", objectFit: "contain" }
      : { width: "10rem", height: "6rem" }),
    ...(isMobile ? { width: "2rem", height: "2rem" } : {}),
    ...(isTab
      ? {
          width: "8rem ",
          height: "8rem",
        }
      : {}),
    ...(isBig ? { width: "12rem ", height: "12rem" } : {}),
  };
  const leftShift: React.CSSProperties = {
    ...containerStyle,
    ...(isBig
      ? { marginLeft: "-7rem", marginTop: "-2rem" }
      : { marginLeft: "-1rem", marginTop: "-1rem" }),
  };
  const RightShift: React.CSSProperties = {
    ...containerStyle,
    marginLeft: "4rem",
  };
  return (
    <StyledBox>
      <StyledBoxLeft>
        <StyledText
          className={`${poppins.variable}`}
          sx={{ fontFamily: "var(--font-poppins)" }}
          variant="h2"
        >
          Book Events wherever you are
        </StyledText>
        <StyledSubText className={`${poppins.variable}`}>
          Checkout the vibe of the place by checking out the place.
        </StyledSubText>
        <Button
          className={`${poppins.variable}`}
          sx={
            !isSmallMobile
              ? {
                  width: "12rem",
                  marginTop: "2rem",
                  borderRadius: "2rem",
                  color: "white",
                  backgroundColor: "#EFA71C",
                  fontWeight: 800,
                  padding: "0.6rem",
                  fontFamily: "var(--font-poppins)",
                }
              : {
                  width: "7rem",
                  fontSize: "0.55rem",
                  marginTop: "1rem",
                  borderRadius: "2rem",
                  color: "white",
                  backgroundColor: "#EFA71C",
                  fontWeight: 400,
                  padding: "0.6rem",
                  fontFamily: "var(--font-poppins)",
                }
          }
          variant="text"
        >
          Explore your vibe
        </Button>
      </StyledBoxLeft>
      <StyledBoxRight>
        <Image
          src={img1.src}
          alt="imag1"
          width={180}
          height={160}
          style={RightShift}
        />

        <Image
          src={img2.src}
          alt="imag2"
          width={180}
          height={160}
          style={leftShift}
        />
      </StyledBoxRight>
    </StyledBox>
  );
}
