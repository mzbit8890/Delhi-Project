import { Box, Typography, Button, Paper, useMediaQuery } from "@mui/material";
import {
  StyledBox,
  StyledBoxImages,
  StyledBoxLeft,
  StyledPaper,
  StyledText,
  StyledImage,
  StyledTextOne,
  StyledTextTwo,
  StyledBackgroundText,
} from "./index.style";
import Carousel from "react-material-ui-carousel";
import img1 from "@/assests/homeimage3.png";
import Image from "next/image";
import img2 from "@/assests/cr1.webp";
import img3 from "@/assests/cr2.webp";
import img4 from "@/assests/cr3.webp";
import img5 from "@/assests/cr4.webp";
import img6 from "@/assests/cr5.webp";
import img7 from "@/assests/Kashmir.jpg";
import img8 from "@/assests/Bengal.jpg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const imagesForCarousel = [img2, img3, img4, img5, img6, img7, img8];

const FindBestComponent = () => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:959px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width:960px) and (max-width:1199px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const containerStyle = {
    ...(isMobile ? { width: "7rem", height: "7rem" } : {}),
    ...(isSmallScreen
      ? {
          width: "15rem ",
          height: "15rem",
          marginTop: "-3rem",
        }
      : {}),
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <StyledText
        className={`${poppins.variable}`}
        sx={{ fontFamily: "var(--font-poppins)" }}
        variant="h3"
      >
        Find the best things to do
      </StyledText>
      <StyledBoxImages>
        <Carousel
          sx={{
            width: isMobile
              ? "30rem"
              : isLargeScreen
              ? "75rem"
              : isMediumScreen
              ? "50rem"
              : isSmallScreen
              ? "55rem"
              : undefined,
          }}
          indicators={false}
          animation="slide"
        >
          {imagesForCarousel.map((image, index) => (
            <StyledPaper
              sx={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
              }}
              key={index}
            >
              {[0, 1, 2].map((subIndex) => (
                <Box
                  key={subIndex + 2}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Image
                    key={subIndex}
                    src={
                      imagesForCarousel[
                        (index + subIndex) % imagesForCarousel.length
                      ]
                    }
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                    style={
                      isLargeScreen
                        ? StyledImage
                        : isMobile
                        ? {
                            height: "10rem",
                            width: "10rem",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            margin: "1rem 1rem 1rem 0rem",
                          }
                        : isSmallScreen
                        ? {
                            height: "15rem",
                            width: "16rem",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            margin: "1rem 0rem 0rem 1rem",
                          }
                        : isMediumScreen
                        ? {
                            height: "18rem",
                            width: "20rem",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            margin: "1rem 0rem 0rem 1rem",
                          }
                        : {}
                    }
                  />
                  <StyledBackgroundText
                    className={`${poppins.variable}`}
                    sx={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Hostelbird
                  </StyledBackgroundText>
                </Box>
              ))}
            </StyledPaper>
          ))}
        </Carousel>
      </StyledBoxImages>

      <StyledBox>
        <StyledBoxLeft>
          <Image
            src={img1.src}
            alt="image"
            height={400}
            width={400}
            style={containerStyle}
          />
        </StyledBoxLeft>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledTextOne
            className={`${poppins.variable}`}
            style={{
              fontFamily: "var(--font-poppins)",
            }}
            variant="h2"
          >
            Find the best thing to do
          </StyledTextOne>
          <StyledTextTwo
            variant="h6"
            className={`${poppins.variable}`}
            style={{
              fontFamily: "var(--font-poppins)",
            }}
          >
            Discover the best thing to do in the Hostel.
          </StyledTextTwo>
          <Button
            variant="text"
            className={`${poppins.variable}`}
            sx={
              !isMobile
                ? {
                    backgroundColor: "#3D66F8",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    width: "12rem",
                    color: "#fff",
                    padding: "1rem",
                    borderRadius: "2rem",
                    fontFamily: "var(--font-poppins)",
                  }
                : {
                    width: "7rem",
                    fontSize: "0.55rem",
                    marginTop: "2rem",
                    borderRadius: "2rem",
                    color: "white",
                    backgroundColor: "#3D66F8",
                    fontWeight: 400,
                    padding: "0.6rem",
                    fontFamily: "var(--font-poppins)",
                  }
            }
          >
            Set Up Itenary
          </Button>
        </Box>
      </StyledBox>
    </Box>
  );
};

export default FindBestComponent;
