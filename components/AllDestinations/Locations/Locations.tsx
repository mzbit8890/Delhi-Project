"use client";

import { useEffect, useState } from "react";

import { Box, Grid, Typography, DialogTitle, Dialog } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

import {
  CardBox,
  CenterBox,
  CenterGrid,
  DestinationImage,
  ExploreButton,
  HeadingBox,
  HeadingBoxButton,
  ImageBox,
  TextBox,
} from "./Locations.style";
import camel from "@/assests/camel.png";

interface destinationInterface {
  id: string;
  name: string;
  description: string;
  image: any;
}

const Destinations = () => {
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
        // console.log(data);

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
      <TextBox p={1} mt={12}>
        <Typography textAlign="center" variant="h6">
          BOOK YOUR ESCAPE NOW AND ENJOY A FLAT 29% OFF YOUR STAY!
        </Typography>
      </TextBox>
      <CenterBox mx={{ xs: 1, lg: 8 }} mt={5} mb={5}>
        <Box>
          <HeadingBox></HeadingBox>
          <Grid container>
            {destinations.map((destination) => (
              <CenterGrid key={destination.id} mb={4} item xs={6} md={6} lg={3}>
                <CardBox>
                  <ImageBox>
                    <DestinationImage
                      alt="img"
                      width={100}
                      height={100}
                      src={destination.image}
                    />
                  </ImageBox>
                  <ExploreButton variant="contained">
                    <PlaceIcon sx={{ color: "red", marginRight: "10px" }} />
                    {destination.name}
                  </ExploreButton>
                </CardBox>
              </CenterGrid>
            ))}
          </Grid>
        </Box>
      </CenterBox>
    </>
  );
};

export default Destinations;
