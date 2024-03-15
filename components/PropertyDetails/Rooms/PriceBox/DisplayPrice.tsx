import { Typography, Box, Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MainBox, SubMainBox } from "./index.style";
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
    <Box  className={`${poppins.variable}`}>
      {selectBookingRoom.map((room: Room, index: number) => (
        <MainBox key={index}>
          <SubMainBox>

            <Box>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                variant="body1"
              >
                Room Name: {room.RoomName}
              </Typography>
              {/* <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                variant="body1"
              >
                Room Type: {room.RoomType}
              </Typography> */}

              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                variant="body1"
              >
                ₹ {selectBookingRoom[index].Price * selectBookingRoom[index].TotalRooms} x {nights} night x {selectBookingRoom[index].TotalRooms} room
              </Typography>
            </Box>

            <IconButton
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
            </IconButton>
          </SubMainBox>
        </MainBox>
      ))}
      <Box sx={{ padding: "1rem "}}>
        <Box my={2} sx={{display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontFamily: "var(--font-poppins)" }} variant="body1">
          Payable Amount (10%): 
        </Typography>
        <Typography sx={{ fontFamily: "var(--font-poppins)" }} variant="body1">
          Rs. {(TotalCostNight * 0.1).toFixed(0)}
        </Typography>
        
        </Box>
        {/* <Typography
          sx={{ fontFamily: "var(--font-poppins)", mb: "1rem" }}
          variant="body1"
        >
          Total Rooms:
          {BookingRoomTotalRooms}
        </Typography> */}
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
            sx={{ fontFamily: "var(--font-poppins)" }}
            variant="body1"
          >
            Total Amount Rs. {selectBookingRoomCost} x {nights + " "}nights
          </Typography>
          <Typography
            sx={{ fontFamily: "var(--font-poppins)", color: "#F65656" }}
            variant="body1"
          >
            INR {" " + selectBookingRoomCost * nights}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "100%", m: "0 auto", backgroundColor: "#F65656" }}
          disabled={selectBookingRoom.length === 0}
          onClick={() => router.push("/booking-checkout")}
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
}