import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlaceIcon from "@mui/icons-material/Place";

export default function ImageSwiper() {
  const [showMoreHeight, setShowMoreHeight] = useState(false);

  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  const cityName = pathNameArray[2];
  const PropertyName = pathNameArray[3];
  interface PropertyData {
    PropertyName: string;
    city: string;
    PropertyDescription: string;
    PropertyType: string;
    CancellationPolicy: string;
    ThingstoNote: string;
    minimumNights: number;
    maximumNights: number;
    weekendMinimumNights: number;
    checkIn: number;
    checkout: number;
    PropertyFacalities: string[];
    PropertyServices: string[];
    PropertyEntertainment: string[];
    FoodAndDrinks: string[];
    PropertyImages: string[];
    OtherDetailsForResponse: { Address: string }[] | null;
  }
  const [propertyData, setPropertyData] = useState<PropertyData>({
    PropertyName: "",
    city: "",
    PropertyDescription: "",
    PropertyType: "",
    CancellationPolicy: "",
    ThingstoNote: "",
    minimumNights: 0,
    maximumNights: 0,
    weekendMinimumNights: 0,
    checkIn: 0,
    checkout: 0,
    PropertyFacalities: [],
    PropertyServices: [],
    PropertyEntertainment: [],
    FoodAndDrinks: [],
    PropertyImages: [],
    OtherDetailsForResponse: null,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cityName && PropertyName) {
          const response = await fetch(
            `https://api.hostelbird.com/propertyDetails/getPropertyDetails/${cityName}/${PropertyName}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setPropertyData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };

    fetchData();
  }, [cityName, PropertyName]);

  const imagesToDisplay = propertyData?.PropertyImages?.slice(0, 4);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={imagesToDisplay[0]}
            alt="image1"
            width={500}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagesToDisplay[1]}
            alt="image1"
            width={500}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagesToDisplay[2]}
            alt="image1"
            width={500}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagesToDisplay[3]}
            alt="image1"
            width={500}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </SwiperSlide>
      </Swiper>
      <Box mx={0.5} mt={3}>
        <Typography variant="h4" textAlign="center">
          {propertyData.PropertyName}
        </Typography>
        <Typography
          my={1}
          variant="body2"
          textAlign="center"
          sx={{ color: "#818181" }}
        >
          <PlaceIcon sx={{ color: "#F65656", fontSize: "14px" }} />
          {propertyData?.OtherDetailsForResponse?.[0]?.Address}
        </Typography>
        <Box
          sx={{ height: showMoreHeight ? "100%" : "150px", overflow: "hidden" }}
        >
          <Typography variant="body1" textAlign="center">
            {propertyData.PropertyDescription}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ color: "#F65656" }}
            onClick={() => setShowMoreHeight((prev) => !prev)}
          >
            Show More <KeyboardArrowDownIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
}
