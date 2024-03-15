import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  StyledBoxBottomRight,
  StyledBoxUpperRight,
  StyledLeftBox,
  StyledText,
  StyledSubText,
  StyledBottonText,
  StyledBoxBottomImage,
} from "./index.style";
import { Poppins } from "next/font/google";
import BackgroundImage from "@/assests/IMAGE.png";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FancySectionComponent() {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:959px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width:960px) and (max-width:1199px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const containerStyle = {};
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        className={`${poppins.variable}`}
        sx={
          isLargeScreen
            ? {
                display: "flex",
                flexDirection: "row",
                marginTop: "5rem",
                fontFamily: "var(--font-poppins)",
              }
            : {
                display: "flex",
                flexDirection: "column",
              }
        }
      >
        <StyledLeftBox>
          <StyledText
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
            variant="h3"
            color="white"
          >
            Plan
          </StyledText>
          <StyledSubText
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
            variant="h6"
          >
            your trip
          </StyledSubText>
          <Button
            className={`${poppins.variable}`}
            sx={
              !isMobile
                ? {
                    fontFamily: "var(--font-poppins)",
                    fontWeight: "bold",
                    padding: "1rem",
                    margin: "2rem",
                    width: "15rem",
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "2rem",
                  }
                : {
                    backgroundColor: "#fff",
                    width: "10rem",
                    fontSize: "0.65rem",
                    color: "#000",
                    marginTop: "0.5rem",
                    borderRadius: "1rem",
                    marginLeft: "1rem",
                  }
            }
            variant="text"
          >
            Search Hostels
          </Button>
        </StyledLeftBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <StyledBoxUpperRight>
            <StyledText
              className={`${poppins.variable}`}
              sx={{ fontFamily: "var(--font-poppins)" }}
              variant="h3"
              color="white"
            >
              Book
            </StyledText>
            <StyledSubText
              className={`${poppins.variable}`}
              sx={{ fontFamily: "var(--font-poppins)" }}
              variant="h6"
            >
              with friends
            </StyledSubText>
            <Button
              className={`${poppins.variable}`}
              sx={
                !isMobile
                  ? {
                      fontFamily: "var(--font-poppins)",
                      padding: "1rem",
                      margin: "2rem",
                      width: "15rem",
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: "2rem",
                      fontWeight: "bold",
                    }
                  : {
                      backgroundColor: "#fff",
                      width: "10rem",
                      fontSize: "0.65rem",
                      color: "#000",
                      marginTop: "0.5rem",
                      borderRadius: "1rem",
                      marginLeft: "1rem",
                    }
              }
              variant="text"
            >
              Book your entire trip
            </Button>
          </StyledBoxUpperRight>

          <StyledBoxBottomRight>
            <StyledText
              className={`${poppins.variable}`}
              sx={{ fontFamily: "var(--font-poppins)" }}
              variant="h3"
            >
              FAQ
            </StyledText>
            <Button
              className={`${poppins.variable}`}
              sx={
                !isMobile
                  ? {
                      fontFamily: "var(--font-poppins)",
                      padding: "1rem",
                      margin: "1rem",
                      width: "15rem",
                      backgroundColor: "#3D66F8",
                      color: "#fff",
                      borderRadius: "2rem",
                      fontWeight: "bold",
                    }
                  : {
                      backgroundColor: "#3D66F8",
                      width: "10rem",
                      color: "#fff",
                      marginTop: "0.5rem",
                      borderRadius: "2rem",
                      marginLeft: "1rem",
                    }
              }
              variant="text"
            >
              Explore FAQs
            </Button>
          </StyledBoxBottomRight>
        </Box>
      </Box>
      <StyledBoxBottomImage>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <StyledBottonText
            variant="h4"
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)", color: "#000" }}
          >
            Experience Like Never Before
          </StyledBottonText>
          <Button
            variant="text"
            className={`${poppins.variable}`}
            sx={
              !isMobile
                ? {
                    fontFamily: "var(--font-poppins)",
                    fontWeight: "medium",
                    marginTop: "2rem",
                    padding: "1rem",
                    width: "15rem",
                    backgroundColor: "#3D66F8",
                    color: "#fff",
                    borderRadius: "2rem",
                  }
                : {
                    backgroundColor: "#3D66F8",
                    width: "3rem",
                    fontSize: "0.5rem",
                    color: "#fff",
                    marginTop: "-2.5rem",
                    borderRadius: "2rem",
                    marginLeft: "1rem",
                  }
            }
          >
            Explore
          </Button>
        </Box>
      </StyledBoxBottomImage>
    </Box>
  );
}
