import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendorNameForVendorDashboard: "",
  PropertiesForVendorDashboard: [],
  PropertyID: "",
  VendorId: "",
  VendorName: "",
  successValue: "",
};

const VendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    setLoggedInVendorForDashboard: (state, action) => {
      state.vendorNameForVendorDashboard = action.payload;
      return state;
    },
    setVendorID: (state, action) => {
      state.VendorId = action.payload;
      return state;
    },
    setVendorName: (state, action) => {
      state.VendorName = action.payload;
      return state;
    },
    PropertiesOfVendorForDashboard: (state, action) => {
      state.PropertiesForVendorDashboard = action.payload;
      return state;
    },
    SetPropertyIdForVendorDashboard: (state, action) => {
      state.PropertyID = action.payload;
      return state;
    },
    SetUpdateSuccess: (state, action) => {
      state.successValue = action.payload;
      return state;
    },
    SetLoginSuccess: (state, action) => {
      state.successValue = action.payload;
      return state;
    },
    ResetStore: (state) => {
      state.vendorNameForVendorDashboard = "";
      state.PropertiesForVendorDashboard = [];
      state.PropertyID = "";
      state.VendorId = "";
      state.VendorName = "";
      state.successValue = "";
    },
  },
});

export const {
  setLoggedInVendorForDashboard,
  PropertiesOfVendorForDashboard,
  SetPropertyIdForVendorDashboard,
  setVendorID,
  setVendorName,
  SetUpdateSuccess,
  SetLoginSuccess,
  ResetStore,
} = VendorSlice.actions;

export default VendorSlice.reducer;
