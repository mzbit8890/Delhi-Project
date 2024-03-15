import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

export interface StateI {
  cityNameForPropertyDisplay: string;
  PropertyNameForPropertyDisplay: string;
  PropertyRating: Number;
  roomPrice: number;
  isComplete: {
    PropertyImages: boolean | null;
    PropertyDescription: boolean | null;
    PropertyEntertainment: boolean | null;
    FoodAndDrinks: boolean | null;
    PropertyFacalities: boolean | null;
    PropertyServices: boolean | null;
    checkIn: boolean | null;
    checkout: boolean | null;
  };
}

const initialState: StateI = {
  cityNameForPropertyDisplay: "",
  PropertyNameForPropertyDisplay: "",
  PropertyRating: 0,
  roomPrice: 0,
  isComplete: {
    PropertyImages: false,
    PropertyDescription: false,
    PropertyEntertainment: false,
    PropertyServices: false,
    FoodAndDrinks: false,
    PropertyFacalities: false,
    checkIn: false,
    checkout: false,
  },
};

const PropertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setCityNameForPropertyDisplay: (state, action: PayloadAction<string>) => {
      state.cityNameForPropertyDisplay = action.payload;
    },
    setPropertyRating: (state, action: PayloadAction<Number>) => {
      state.PropertyRating = action.payload;
    },
    setPropertyNameForPropertyDisplay: (
      state,
      action: PayloadAction<string>
    ) => {
      state.PropertyNameForPropertyDisplay = action.payload;
    },
    addRoomPrice: (state, action: PayloadAction<number>) => {
      state.roomPrice = Math.max(0, state.roomPrice + action.payload);
    },
    subtractRoomPrice: (state, action: PayloadAction<number>) => {
      state.roomPrice = Math.max(0, state.roomPrice - action.payload);
    },
    resetRoomPrice: (state) => {
      state.roomPrice = 0;
    },
    updatePropertyStatus: (
      state,
      action: PayloadAction<{
        property: keyof StateI["isComplete"];
        status: boolean;
      }>
    ) => {
      state.isComplete[action.payload.property] = action.payload.status;
    },
    clearPropertyDataStatus: (state) => {
      state.isComplete = {
        PropertyImages: null,
        PropertyDescription: null,
        PropertyEntertainment: null,
        PropertyServices: null,
        FoodAndDrinks: null,
        PropertyFacalities: null,
        checkIn: null,
        checkout: null,
      };
    },
  },
});

export const {
  setCityNameForPropertyDisplay,
  setPropertyNameForPropertyDisplay,
  setPropertyRating,
  addRoomPrice,
  subtractRoomPrice,
  resetRoomPrice,
  updatePropertyStatus,
  clearPropertyDataStatus,
} = PropertySlice.actions;

export default PropertySlice.reducer;
