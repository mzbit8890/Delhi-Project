import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import KashmirImage from "@/assests/Kashmir.jpg";
import GoaImage from "@/assests/Goa.jpg";
import BengalImage from "@/assests/Bengal.jpg";
import DelhiImage from "@/assests/Delhi.jpg";
import JaipurImage from "@/assests/Jaipur.jpg";
import {
  StyledBoxText,
  StyledGrid,
  StyledHeader,
  StyledSubText,
  StyledText,
} from "./index.style";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Images = [JaipurImage, BengalImage, GoaImage, DelhiImage, KashmirImage];

export default function UpperMiddleComponent() {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:859px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width:860px) and (max-width:1199px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const baseWidthPercentageLg = 39.1;
  const baseWidthPercentageMd = 39.1;
  const containerStyle: React.CSSProperties = {
    ...(isMobile
      ? {
          width: "20rem",
          height: "13rem",
          borderRadius: "0.5rem",
          marginTop: "3rem",
          objectFit: "cover",
        }
      : {}),
    ...(isSmallScreen
      ? {
          width: "25rem",
          height: "15rem",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          objectFit: "cover",
        }
      : {}),
    ...(isMediumScreen
      ? {
          width: `calc(${baseWidthPercentageMd}vw - 105px)`,
          height: "12rem",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          objectFit: "cover",
        }
      : {}),
    ...(isLargeScreen
      ? {
          width: `calc(${baseWidthPercentageLg}vw - 105px)`,
          height: "337px",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          objectFit: "cover",
        }
      : {}),
  };
  const containerStyle2: React.CSSProperties = {
    ...(isMobile
      ? {
          width: "20rem",
          height: "13rem",
          borderRadius: "0.5rem",
          marginTop: "3rem",
          objectFit: "cover",
        }
      : {}),
    ...(isSmallScreen
      ? {
          width: "25rem",
          height: "20rem",
          borderRadius: "0.5rem",
          objectFit: "cover",
        }
      : {}),
    ...(isMediumScreen
      ? {
          width: `calc(${baseWidthPercentageMd}vw - 105px)`,
          height: "25rem",
          borderRadius: "1rem",
          objectFit: "cover",
        }
      : {}),
    ...(isLargeScreen
      ? {
          width: `calc(${baseWidthPercentageLg}vw - 105px)`,
          height: "694px",
          borderRadius: "1rem",
          objectFit: "cover",
        }
      : {}),
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "-47px",
        position: "relative",
        zIndex: -1,
      }}
    >
      <StyledHeader
        className={`${poppins.variable}`}
        sx={{ fontFamily: "var(--font-poppins)", fontWeight: 800 }}
      >
        Explore Our Top Cities
      </StyledHeader>
      <StyledGrid spacing={1} container>
        <Grid sx={{ display: "flex", flexDirection: "column" }} item>
          <Image src={Images[0]} alt="Jaipur" style={containerStyle} />
          <StyledBoxText>
            <StyledText
              variant="body1"
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
            >
              Jaipur
            </StyledText>
            <StyledSubText
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
              variant="body2"
            >
              Pristine beaches, lively nightlife,
            </StyledSubText>
          </StyledBoxText>

          <Image src={Images[1]} alt="Bengal" style={containerStyle} />
          <StyledBoxText>
            <StyledText
              variant="body1"
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
            >
              Kolkata
            </StyledText>
            <StyledSubText
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
              variant="body2"
            >
              Pristine beaches, lively nightlife
            </StyledSubText>
          </StyledBoxText>
        </Grid>

        <Grid item>
          <Image src={Images[2]} alt="Center" style={containerStyle2} />
          <StyledBoxText>
            <StyledText
              variant="body1"
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
            >
              Goa
            </StyledText>
            <StyledSubText
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
              variant="body2"
            >
              Pristine beaches, lively nightlife,
            </StyledSubText>
          </StyledBoxText>
        </Grid>
        {!isMobile ? (
          <Grid sx={{ display: "flex", flexDirection: "column" }} item>
            <Image src={Images[3]} alt="Delhi" style={containerStyle} />
            <StyledBoxText>
              <StyledText
                variant="body1"
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Delhi
              </StyledText>
              <StyledSubText
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
                variant="body2"
              >
                Pristine beaches, lively nightlife,
              </StyledSubText>
            </StyledBoxText>
            <Image src={Images[4]} alt="Kashmir" style={containerStyle} />
            <StyledBoxText>
              <StyledText
                variant="body1"
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Kashmir
              </StyledText>
              <StyledSubText
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
                variant="body2"
              >
                Serene landscapes, culturalSerene
              </StyledSubText>
            </StyledBoxText>
          </Grid>
        ) : (
          ""
        )}
      </StyledGrid>
      <Button
        className={`${poppins.variable}`}
        variant="contained"
        sx={{
          borderRadius: "2.5rem",
          width: "10rem",
          padding: "0.6rem",
          backgroundColor: "#3D66F8",
          marginTop: "2rem",
          marginBottom: "4rem",
          fontFamily: "var(--font-poppins)",
        }}
      >
        Explore All
      </Button>
    </Box>
  );
}
