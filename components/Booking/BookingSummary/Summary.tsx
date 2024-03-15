import { Typography, Box, Button, IconButton, Divider, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { BoxWrapper, MainBox, StyledText, StyledUpperPriceBox, SubMainBox } from "./Summary.style";
import { Room, initialState } from "@/Store/Booking/BookingSlice";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { removeRoom } from "@/Store/Booking/BookingSlice";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DisplayPriceBox() {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectBookingRoomCost = useSelector(
    (state: any) => state.booking.totalCost
  );
  const selectBookingRoom = useSelector((state: any) => state.booking.rooms);
//   console.log(selectBookingRoom[0].RoomImages[0]);
  
  const BookingRoomTotalRooms = useSelector(
    (state: any) => state.booking.totalRooms
  );
  const checkin = useSelector((state: any) => state.bookingDates.checkIn);
  const checkout = useSelector((state: any) => state.bookingDates.checkOut);

  const fromDateString = checkin;
  const toDateString = checkout;
  let nights = 0;
  if (fromDateString && toDateString) {
    const fromDate = new Date(fromDateString);
    const toDate = new Date(toDateString);

    const timeDifference = toDate.getTime() - fromDate.getTime();

    nights = Math.round(timeDifference / (1000 * 60 * 60 * 24));
  } else {
    console.error("Invalid date parameters");
  }
  const TotalCostNight = selectBookingRoomCost * nights;

  return (
    <Box>
        <StyledUpperPriceBox>
        <Typography
          className={`${poppins.variable}`}
          sx={{
            fontFamily: "var(--font-poppins)",
            fontSize: "2rem",
            fontWeight: 700
          }}
          variant="h5"
        >
          Summary
        </Typography>
          <StyledText
            className={`${poppins.variable}`}
          >
            <strong style={{ marginLeft: "0.2rem", fontSize: "1.1rem" }}>
              {checkin} - {checkout}
            </strong>
          </StyledText>
    <Box  className={`${poppins.variable}`}>
      {selectBookingRoom.map((room: Room, index: number) => (
        <MainBox key={index}>
          <SubMainBox>
            <BoxWrapper>
            <Box mr={2} sx={{width: '70px', height: '55px', borderRadius: '10px'}} component="img" alt="img" src={room.RoomImages[0]}/>
            <Box>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                variant="body1"
              >
                Room Name: {room.RoomName}
              </Typography>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                variant="body1"
              >
                ₹ {selectBookingRoom[index].Price * selectBookingRoom[index].TotalRooms} x {nights} night x {selectBookingRoom[index].TotalRooms} room
              </Typography>
            </Box>
            </BoxWrapper>

            {/* <IconButton
              aria-label="delete"
              onClick={() => dispatch(removeRoom(selectBookingRoom[index].id))}
              sx={{
                position: "relative",
                top: "8px",
                right: "8px",
                color: "#F65656",
              }}
            >
              <DeleteIcon />
            </IconButton> */}
          </SubMainBox>
        </MainBox>
      ))}
      <Box sx={{ padding: "1rem "}}>
        <Box my={2} sx={{display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 700 }} variant="h6">
          Payable Amount (10%): 
        </Typography>
        <Typography sx={{ fontWeight: 700 }} variant="h6">
        ₹{(TotalCostNight * 0.1).toFixed(0)}
        </Typography>
        
        </Box>

        <Box my={3} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <TextField sx={{width: '75%'}} label="Discount Coupon" variant="outlined" InputProps={{ style: {borderRadius: '10px', padding: '0px', height: '50px'} }} InputLabelProps={{style: {fontSize: '14px'}}}/>
          <Button sx={{padding: '10px 15px', borderRadius: '10px', color: '#F65656', borderColor: '#F65656'}} variant="outlined">Apply</Button>
        </Box>

        <Box
          my={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontWeight: 700 }}
            variant="h6"
          >
            Total Amount
          </Typography>
          <Typography
            sx={{ color: "#F65656", fontWeight: 700 }}
            variant="h6"
          >
            ₹{" " + selectBookingRoomCost * nights}
          </Typography>
        </Box>
        <Divider />
        <Button
          variant="contained"
          sx={{ width: "100%", m: "0 auto", backgroundColor: "#F65656", padding: '15px 10px', borderRadius: '10px' }}
          disabled={selectBookingRoom.length === 0}
          onClick={() => router.push("/booking-checkout")}
        >
          Confirm Booking
        </Button>
      </Box>
    </Box>
    </StyledUpperPriceBox>
    </Box>
  );
}
