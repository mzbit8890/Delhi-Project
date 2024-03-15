import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlaceIcon from "@mui/icons-material/Place";

interface PropertyInterface {
  city: string;
  PropertyName: string;
  RoomPriceStartFrom: any;
  DormsPriceStartFrom: any;
  distanceFromMainCity: any;
  distanceFromAirport: any;
  Postcode_Zip_code: any;
  country: string;
  Address: string;
  AdminRating: number;
  PropertyImages: string[];
}

const Info = () => {
  const [showMoreHeight, setShowMoreHeight] = useState(false);
  // const [hostelData, setHostelData] = useState<PropertyInterface[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);

  //       const response = await fetch(
  //         `https://api.hostelbird.com/`
  //       )

  //       if (!response.ok) {
  //         setError(true);
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setHostelData(data)
  //     } catch (error) {
  //       setLoading(false);
  //     } finally {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 500);
  //     }
  //   };

  //   fetchData();
  // },[]);

  return (
    <>
      <Box mx={3} mt={{ xs: 10, lg: 2 }}>
        <Box
          sx={{ height: showMoreHeight ? "100%" : "70px", overflow: "hidden" }}
        >
          <Typography variant="body1" textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
};

export default Info;
