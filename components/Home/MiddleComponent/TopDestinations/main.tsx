import {
  StyledBox,
  StyledText,
  StyledText2,
  StyledText3,
  StyledText4,
} from "./index.style";
import { Grid, Typography, Paper, Button, useMediaQuery } from "@mui/material";
import img1 from "@/assests/cr1.webp";
import img2 from "@/assests/cr2.webp";
import img3 from "@/assests/cr3.webp";
import img4 from "@/assests/cr4.webp";
import img5 from "@/assests/cr5.webp";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const HotelArrayInfo = [
  {
    img: img1,
    hotelName: "Kimpton Margot",
    city: "Sydney",
    text: "Avg 1300-1500 per booking",
  },
  {
    img: img2,
    hotelName: "W Hotel",
    city: "New York",
    text: "Avg 1200-1400 per booking",
  },
  {
    img: img3,
    hotelName: "Generator Berlin",
    city: "Berlin",
    text: "Avg 1100-1300 per booking",
  },
  {
    img: img4,
    hotelName: "Mondrian",
    city: "London",
    text: "Avg 1000-1200 per booking",
  },
  {
    img: img5,
    hotelName: "Nobu Chicago",
    city: "Chicago",
    text: "Avg 900-1100 per booking",
  },
  {
    img: img5,
    hotelName: "xyz",
    city: "Tokyo",
    text: "Avg 900-1100 per booking",
  },
  {
    img: img4,
    hotelName: "Casa Angelina",
    city: "Praiano",
    text: "Avg 900-1100 per booking",
  },
  {
    img: img3,
    hotelName: "Camping Sass",
    city: "Amsterdam",
    text: "Avg 900-1100 per booking",
  },
];
const TopDestinationComponent = () => {
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
          width: "10rem",
          height: "10rem",
          borderRadius: "1rem",
          objectFit: "cover",
        }
      : {}),
    ...(isSmallScreen
      ? {
          width: "10rem",
          height: "10rem",
          borderRadius: "1rem",
          objectFit: "cover",
        }
      : {}),
    ...(isMediumScreen
      ? {
          width: "12rem",
          height: "12rem",
          borderRadius: "1rem",
          objectFit: "cover",
        }
      : {}),
    ...(isLargeScreen
      ? {
          width: "13rem",
          height: "13rem",
          borderRadius: "1rem",
          objectFit: "cover",
        }
      : {}),
  };

  return (
    <StyledBox>
      <StyledText
        className={`${poppins.variable}`}
        sx={{ fontFamily: "var(--font-poppins)" }}
        variant="h3"
      >
        {" "}
        Top Destinations
      </StyledText>
      <Typography
        variant="h6"
        className={`${poppins.variable}`}
        sx={{
          fontWeight: "light",
          marginTop: "2rem",
          marginBottom: "3rem",
          fontSize: "0.9rem",
          fontFamily: "var(--font-poppins)",
        }}
      >
        Work with 10,000+ hostels around the world, big and small New hostels
        added weekly.
      </Typography>
      <Grid container spacing={2.5}>
        {HotelArrayInfo.map((hotel, index) => (
          <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
            <Image
              key={index}
              src={hotel.img}
              alt={`img ${index}`}
              style={containerStyle}
              loading="lazy"
            />
            <StyledText2
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
              variant="body1"
            >
              {hotel.hotelName}
            </StyledText2>
            <StyledText3
              className={`${poppins.variable}`}
              sx={{ fontFamily: "var(--font-poppins)" }}
              variant="body2"
            >
              {hotel.city}
            </StyledText3>
            <StyledText4
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
              }}
              variant="body2"
            >
              {hotel.text}
            </StyledText4>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="text"
        className={`${poppins.variable}`}
        sx={{
          backgroundColor: "#3D66F8",
          mt: "3rem",
          marginBottom: "1rem",
          color: "#fff",
          padding: "1rem",
          borderRadius: "2rem",
          fontFamily: "var(--font-poppins)",
        }}
      >
        Find the right place
      </Button>
    </StyledBox>
  );
};

export default TopDestinationComponent;
