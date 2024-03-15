import BookingSummary from "./BookingSummary/BookingSummary";
import Summary from "./BookingSummary/Summary"
import Form from "./Form/main";
import { Box, Grid } from "@mui/material";
import TopBox from "./TopBox/main";
import { useSelector } from "react-redux";
import BookingStatus from "./BookingStatus/main";
import { useState } from "react";
export default function BookingComponent() {
  const BookingStatusRedux = useSelector(
    (state: any) => state.bookingStatus.bookingStatus
  );

  return !BookingStatusRedux ? (
    <>
      <Box px={{xs: 1.5, lg: 6}}>
      <TopBox />
      <Grid container spacing={10}>
        <Grid item xs={12} lg={8}><Form /></Grid>
        {/* <Grid item  xs={12} lg={4}><BookingSummary /></Grid> */}
        <Grid item xs={12} lg={4}><Summary /></Grid>
      </Grid>
      </Box>
    </>
  ) : (
    <BookingStatus />
  );
}
