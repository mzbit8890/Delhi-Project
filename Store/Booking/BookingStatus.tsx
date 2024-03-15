import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingStatus {
  bookingStatus: boolean;
  details: {
    orderId: string;
    BookedRooms: number;
    username: string;
  } | null;
}

const initialState: BookingStatus = {
  bookingStatus: false,
  details: null,
};

const BookingStatusSlice = createSlice({
  name: "bookingStatus",
  initialState,
  reducers: {
    setStatusForBooking: (state, action: PayloadAction<boolean>) => {
      state.bookingStatus = action.payload;
    },
    setBookingDetails: (
      state,
      action: PayloadAction<{
        orderId: string;
        BookedRooms: number;
        username: string;
      } | null>
    ) => {
      state.details = action.payload;
    },
  },
});

export const { setStatusForBooking, setBookingDetails } =
  BookingStatusSlice.actions;

export default BookingStatusSlice.reducer;
