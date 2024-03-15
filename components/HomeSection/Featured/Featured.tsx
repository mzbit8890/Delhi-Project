import React, { useEffect, useRef, useState } from "react";
import { addDays, format } from "date-fns";

import { Box } from "@mui/material";
import {
  BookButton,
  CardImage,
  LaunchButton,
  SlideBox,
  SubTitileTypography,
  TitileTypography,
} from "./Featured.style";
import { HeadingTypography } from "../index.style";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Featured.css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

interface FeaturedInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  AdminRating: number;
  PhoneNumber: string;
  PropertyName: string;
  PropertyType: string;
  RoomPriceStartFrom: string;
  DormsPriceStartFrom: string;
  distanceFromMainCity: string;
  distanceFromAirport: string;
  currency: string;
  city: string;
  Postcode_Zip_code: number;
  Total_number_of_bedrooms: number;
  Number_of_beds: number;
  country: string;
  DateAndTime: string;
  Address: string;
  uploadedImageDoc: any;
  verifiedProperty: boolean;
  PropertDetailsVerified: boolean;
  isFeatured: boolean;
  propertyDetails: any;
}

export default function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [featuredProperties, setFeaturedProperties] = useState<
    FeaturedInterface[]
  >([]);

  const today = new Date().toISOString().split("T")[0];
  const todayy = new Date();
  const tomorrow = addDays(todayy, 1);
  const tomorrowString = format(tomorrow, "yyyy-MM-dd");
  // console.log(today, tomorrowString);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.hostelbird.com/featured-hostels/allFeatHostels`
        );

        if (!response.ok) {
          setError(true);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);

        setFeaturedProperties(data);
      } catch (error) {
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeadingTypography mb={{ xs: 0, lg: 5 }} variant="h3">
        Featured Properties
      </HeadingTypography>
      <Box mx={{ xs: 0, lg: 10 }} pb={5}>
        <Swiper
          slidesPerView={isMobile ? 2 : 5}
          spaceBetween={isMobile ? 0 : 10}
          className="mySwiper"
          // navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          style={{ height: isMobile ? "450px" : "500px" }}
        >
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <SlideBox m={1}>
                <LaunchButton variant="contained">Featured</LaunchButton>
                <CardImage
                  alt="img"
                  width={100}
                  height={100}
                  src={property.uploadedImageDoc}
                />
                <Box my={1} mx={1.5}>
                  <TitileTypography variant="h5">
                    {property.PropertyName}
                  </TitileTypography>
                  <TitileTypography variant="h5">
                    {property.city}
                  </TitileTypography>
                  <SubTitileTypography my={1} variant="body1">
                    {property.propertyDetails.PropertyDescription.slice(0, 120)}
                    ...
                  </SubTitileTypography>
                  <BookButton
                    variant="contained"
                    href={`/Properties/${property.city}/${property.PropertyName}?from=${today}&to=${tomorrowString}&adults=1&children=0&rooms=1`}
                  >
                    Book Now
                  </BookButton>
                </Box>
              </SlideBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
