import {
  Box,
  Paper,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import {
  ImageStyle,
  ImageStyle3,
  PropertyInnerStyledPaper,
  StyledBox,
} from "./FeaturedProperties.style";
import Bengal from "@/assests/Bengal.jpg";
import Delhi from "@/assests/Delhi.jpg";
// import Goa from "@/assests/Goa.jpg";
import Kashmir from "@/assests/Kashmir.jpg";
import Image from "next/image";

const FeaturedProperties = () => {
  const [hostels] = useState([
    { name: "Hoztel Jaipur", rating: 4.5, price: "₹1550.00" },
    { name: "Hostel 2", rating: 4.2, price: "₹1500.00" },
    { name: "Hostel 3", rating: 1.0, price: "₹1060.00" },
    { name: "Hostel 4", rating: 2.0, price: "₹1020.00" },
    { name: "Hostel 5", rating: 3.0, price: "₹1234.00" },
    { name: "Hostel 6", rating: 5.0, price: "₹2155.00" },
    { name: "Hostel 7", rating: 21.0, price: "₹1211.00" },
  ]);
  const TempImageArray = [Bengal, Kashmir, Delhi, Delhi];
  const rating = (Math.random() * 5).toString();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isBig = useMediaQuery(theme.breakpoints.up("lg"));
  const groupedHostels = [];
  const hostelsPerGroup = isBig ? 3 : isTab ? 2 : 1;
  for (let i = 0; i < hostels.length; i += hostelsPerGroup) {
    groupedHostels.push(hostels.slice(i, i + hostelsPerGroup));
  }

  return (
    <StyledBox>
      <Typography
        variant="h5"
        sx={{ mb: "1rem", fontFamily: "Raleway", fontWeight: 600 }}
      >
        Featured Properties
      </Typography>
      <Carousel animation="slide" indicators={false}>
        {groupedHostels.map((group, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {group.map((hostel, subIndex) => (
              <PropertyInnerStyledPaper elevation={1} key={subIndex}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Carousel
                    sx={{
                      width: "7rem",
                      p: "0.5rem",
                      height: "7rem",
                    }}
                    indicators={false}
                  >
                    {TempImageArray?.map((image, index) => (
                      <Image
                        key={index}
                        loading="lazy"
                        src={image}
                        alt="PropertyImage"
                        style={ImageStyle3}
                      />
                    ))}
                  </Carousel>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Raleway", fontWeight: 700 }}
                    >
                      {hostel.name}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={parseInt(rating)}
                      readOnly
                      sx={{ ml: "0.2rem" }}
                    />

                    <Typography sx={{ fontFamily: "Dm Sans" }}>
                      From{" "}
                      <span
                        style={{
                          color: "	#FF5F1F",
                          fontSize: "1.3rem",
                          fontFamily: "Raleway",
                          fontWeight: 700,
                        }}
                      >
                        {hostel.price}{" "}
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </PropertyInnerStyledPaper>
            ))}
          </Box>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default FeaturedProperties;
