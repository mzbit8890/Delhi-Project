import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  StyledMainPaper,
  Header,
  SummaryBox,
  PropertyNameText,
  RoomNameText,
  InfoText,
  PropertyBox,
  DetailsBox,
  BottomBox,
  DateText,
  BottomText,
  SubBottomBox,
} from "./index.style";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Room } from "@/Store/Booking/BookingSlice";
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BookingSummary = () => {
  const TotalRoomsCost = useSelector((state: any) => state.booking.totalCost);
  const selectedBookingRooms = useSelector((state: any) => state.booking.rooms);
  const TotalRoomBooked = useSelector((state: any) => state.booking.totalRooms);
  const checkin = useSelector((state: any) => state.bookingDates.checkIn);
  const checkout = useSelector((state: any) => state.bookingDates.checkOut);

  const PropertyName = selectedBookingRooms[0]?.PropertyName;
  const nights = selectedBookingRooms[0]?.TotalNights;
  const RoomImage = selectedBookingRooms[0]?.RoomImages[0];
  const AllRoomName = selectedBookingRooms
    ?.slice(0, 3)
    .map((room: Room, index: number) => (
      <RoomNameText key={index}>
        <span
          style={{ fontWeight: 500, fontSize: "15px", marginRight: "0.5rem" }}
        >
          Room Name :
        </span>
        {room.RoomName}
      </RoomNameText>
    ));

  return (
    <>
      <StyledMainPaper className={`${raleway.variable}`} elevation={10}>
        <Header
          sx={{
            fontFamily: "var(--font-raleway)",
          }}
        >
          Booking Summary
        </Header>
        <PropertyBox>
          <PropertyNameText>{PropertyName}</PropertyNameText>
          <Image
            src={RoomImage}
            style={{ borderRadius: "1rem" }}
            alt="RoomImage.webp"
            width={70}
            height={70}
          />
        </PropertyBox>
        <DetailsBox>
          <RoomNameText>{AllRoomName}</RoomNameText>

          <SummaryBox>
            <InfoText>Total Amount x {nights + " "} nights</InfoText>
            <InfoText>INR {TotalRoomsCost * nights}</InfoText>
          </SummaryBox>
          <SummaryBox>
            <InfoText sx={{ color: "#3D66F8", fontWeight: 800 }}>
              Payable on Check-in
            </InfoText>
            <InfoText>
              INR {TotalRoomsCost * nights - TotalRoomsCost * nights * 0.1}
            </InfoText>
          </SummaryBox>
          <SummaryBox>
            <InfoText sx={{ color: "#3D66F8", fontWeight: 800 }}>
              Payable Now
            </InfoText>
            <InfoText>INR {TotalRoomsCost * nights * 0.1}</InfoText>
          </SummaryBox>
          <SummaryBox>
            <InfoText>Total Rooms</InfoText>
            <InfoText>{TotalRoomBooked}</InfoText>
          </SummaryBox>
          <SummaryBox>
            <InfoText>GST</InfoText>
            <InfoText>0</InfoText>
          </SummaryBox>
          <SummaryBox>
            <InfoText>Discount</InfoText>
            <InfoText>0</InfoText>
          </SummaryBox>
        </DetailsBox>
        <BottomBox>
          <SubBottomBox>
            <BottomText>Check-In</BottomText>
            <DateText>{checkin}</DateText>
          </SubBottomBox>
          <SubBottomBox>
            <BottomText>Check-Out</BottomText>
            <DateText>{checkout}</DateText>
          </SubBottomBox>
        </BottomBox>
      </StyledMainPaper>
    </>
  );
};

export default BookingSummary;
