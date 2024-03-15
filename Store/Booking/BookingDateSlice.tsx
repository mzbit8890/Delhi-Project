import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookingDateState {
  checkIn: string;
  checkOut: string;
}

const initialState: BookingDateState = {
  checkIn: "",
  checkOut: "",
};

const BookingDateSlice = createSlice({
  name: "bookingdate",
  initialState,
  reducers: {
    setBookingDate(
      state,
      action: PayloadAction<{ checkIn: string; checkOut: string }>
    ) {
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
    },
  },
});

export const { setBookingDate } = BookingDateSlice.actions;

export default BookingDateSlice.reducer;
