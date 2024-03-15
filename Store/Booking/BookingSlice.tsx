import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Room {
  id: string;
  RoomImages: [] | string;
  Price: string;
  RoomGrade: string;
  NumberofGuestPerRoom: number;
  RoomType: string;
  NumberOfRoomsOfSameType: number;
  NumberofRoomsBookedCurrently: number;
  NumberOfRoomsAvailable: number;
  Ensuite: string;
  RoomName: string;
  RoomDescrption: string;
  weekDayPrice: number;
  weekEndPrice: number;
  TotalRooms: number;
  TotalNights: number;
}

export interface BookingRoom {
  totalCost: number;
  rooms: Room[];
  totalRooms: number;
  TotalNights: number;
}

export const initialState: BookingRoom = {
  totalCost: 0,
  rooms: [],
  totalRooms: 0,
  TotalNights: 0,
};

const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setRoomForBooking: (state, action: PayloadAction<Room[]>) => {
      const rooms = action.payload;
      let totalCost = 0;
      let totalRooms = 0;

      rooms.forEach((room) => {
        totalCost += parseFloat(room.Price) * room.TotalRooms;
        totalRooms += room.TotalRooms;
      });

      state.totalCost = totalCost;
      state.TotalNights = rooms[0]?.TotalNights;
      state.totalRooms = totalRooms;
      state.rooms = rooms;
    },
    removeRoom: (state, action: PayloadAction<string>) => {
      const roomIdToRemove = action.payload;
      const updatedRooms = state.rooms.filter(
        (room) => room.id !== roomIdToRemove
      );

      let totalCost = 0;
      let totalRooms = 0;

      updatedRooms.forEach((room) => {
        totalCost += parseFloat(room.Price) * room.TotalRooms;
        totalRooms += room.TotalRooms;
      });

      state.totalCost = totalCost;
      state.totalRooms = totalRooms;
      state.TotalNights = 0;
      state.rooms = updatedRooms;
    },
  },
});

export const { setRoomForBooking, removeRoom } = BookingSlice.actions;

export default BookingSlice.reducer;
