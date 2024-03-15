import Image from "next/image";
import { useEffect, useState } from "react";

import { Box, Grid, Typography, DialogTitle, Dialog } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import {
  CardBox,
  CardTypography,
  ExploreButton,
  HeadingBox,
  HeadingBoxButton,
  ImageBox,
} from "./Destinations.style";
import { HeadingTypography } from "../index.style";
import camel from "@/assests/camel.png";
import jaipur from "@/assests/jaipur.png";
import Link from "next/link";

interface destinationInterface {
  id: string;
  name: string;
  description: string;
  image: any;
}

const Destinations = () => {
  // const [open, setOpen] = useState(false);

  // function handleOpen() {
  //   setOpen(true)
  // }
  // function handleClose() {
  //   setOpen(false)
  // }
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
      <Box my={4}>
        {/* <Dialog maxWidth='xl' onClose={handleClose} open={open} sx={{backgroundColor: 'black'}}>
        <DialogTitle><HeadingTypography variant='h4' textAlign="center">All Destinations</HeadingTypography></DialogTitle>
        <Grid container>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18, 19, 20].map(() => (
            <Grid mb={4} item xs={12} md={6} lg={3} sx={{display: 'flex', justifyContent: 'center'}}>
                <CardBox>
                  <ImageBox>
                    <Image alt='img' src={jaipur} style={{width: '100%', height: '100%'}}/>
                  </ImageBox>
                  <CardTypography variant='h4'>Jaisalmer</CardTypography>
                  <ExploreButton variant='outlined'>Explore</ExploreButton>
                </CardBox>
            </Grid>
        ))}
      </Grid>
      </Dialog> */}

        <HeadingBox>
          <HeadingTypography mb={5} variant="h3">
            Top Destinations
          </HeadingTypography>
          <Link href="/destinations">
            <HeadingBoxButton>
              All Destinations{" "}
              <ArrowRightAltIcon fontSize="large" sx={{ marginLeft: "10px" }} />
            </HeadingBoxButton>
          </Link>
        </HeadingBox>
        <Grid container>
          {destinations.map((destination) => (
            <Grid key={destination.id} mb={4} item xs={12} md={6} lg={3}>
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
                <CardTypography variant="h4">{destination.name}</CardTypography>
                <ExploreButton variant="outlined">Explore</ExploreButton>
              </CardBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Destinations;
