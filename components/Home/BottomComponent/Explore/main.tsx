import { Box, Typography, Button, Paper, useMediaQuery } from "@mui/material";
import {
  StyledBox,
  StyledBoxLeft,
  StyledText,
  StyledBoxRight,
} from "./index.style";
import { Poppins } from "next/font/google";
import Slider from "react-slick";
import Image from "next/image";
import img2 from "@/assests/cr1.webp";
import img3 from "@/assests/cr2.webp";
import img4 from "@/assests/cr3.webp";
import img5 from "@/assests/cr4.webp";
import img6 from "@/assests/cr5.webp";
import img7 from "@/assests/Kashmir.jpg";
import img8 from "@/assests/Bengal.jpg";

const imagesForCarousel = [img2, img3, img4, img5, img6, img7, img8];

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ExploreComponent = () => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:959px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width:960px) and (max-width:1199px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const containerStyle: React.CSSProperties = {
    ...(isMobile
      ? {
          width: "7rem",
          objectFit: "cover",
          height: "7rem",
          borderRadius: "1rem",
        }
      : {}),
    ...(isSmallScreen
      ? {
          width: "12rem",
          borderRadius: "1rem",
          height: "20rem",
          objectFit: "cover",
        }
      : {}),
    ...(isMediumScreen
      ? {
          width: "15rem",
          borderRadius: "1rem",
          height: "20rem",
          objectFit: "cover",
        }
      : {}),
    ...(isLargeScreen
      ? {
          width: "16rem",
          borderRadius: "1rem",
          height: "20rem",
          objectFit: "cover",
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
      <StyledBox>
        <StyledBoxLeft>
          <StyledText
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
            variant="h2"
          >
            Explore hidden Gems & popular Attractions
          </StyledText>
          <Button
            className={`${poppins.variable}`}
            sx={
              !isMobile
                ? {
                    fontFamily: "var(--font-poppins)",
                    backgroundColor: "#EB5757",
                    color: "#fff",
                    fontWeight: "light",
                    width: "15rem",
                    padding: "1rem",
                    marginTop: "3rem",
                    borderRadius: "2rem",
                  }
                : {
                    width: "7rem",
                    fontSize: "0.55rem",
                    marginTop: "2rem",
                    borderRadius: "2rem",
                    color: "white",
                    backgroundColor: "#EB5757",
                    fontWeight: 400,
                    padding: "0.6rem",
                    fontFamily: "var(--font-poppins)",
                  }
            }
            variant="text"
          >
            Find the best places
          </Button>
        </StyledBoxLeft>
        <StyledBoxRight>
          <Slider
            vertical={true}
            autoplay={true}
            dots={false}
            lazyLoad="ondemand"
            nextArrow={<Box></Box>}
            prevArrow={<Box></Box>}
          >
            {imagesForCarousel.map((image, index) => (
              <Box
                key={index}
                style={{ borderRadius: "4rem", objectFit: "fill" }}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                  width={300}
                  height={250}
                  style={containerStyle}
                />
              </Box>
            ))}
          </Slider>
        </StyledBoxRight>
      </StyledBox>
    </Box>
  );
};

export default ExploreComponent;
