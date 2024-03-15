import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import hoteltestimg from "@/assests/hoteltestimg.jpeg";
import camel from "@/assests/camel.png";

import { Box, Button, Paper, Typography } from "@mui/material";
import {
  SlideBox,
  CardBox,
  CardTypography,
  ExploreButton,
  ImageBox,
} from "./MobileDEstinations.style";
import { HeadingTypography } from "../index.style";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Destinations.css";
import { Autoplay, Navigation } from "swiper/modules";

interface destinationInterface {
  id: string;
  name: string;
  description: string;
  image: any;
}

export default function MobileDestinations() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [destinations, setDestinations] = useState<destinationInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.hostelbird.com/top-locations/getAllTopLocations`
        );

        if (!response.ok) {
          setError(true);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setDestinations(data);
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
      <Box pb={{ xs: 1, lg: 5 }}>
        <HeadingTypography mb={{ xs: 0, lg: 5 }} variant="h3">
          Top Destinations
        </HeadingTypography>
        <Swiper
          slidesPerView={isMobile ? 2 : 5}
          spaceBetween={isMobile ? 0 : 30}
          className="mySwiper"
          // navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <SlideBox m={1}>
                <CardBox>
                  <ImageBox>
                    <Image
                      alt="img"
                      src={destination.image}
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </ImageBox>
                  <CardTypography variant="h4">
                    {destination.name}
                  </CardTypography>
                  <ExploreButton variant="outlined">Explore</ExploreButton>
                </CardBox>
              </SlideBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
