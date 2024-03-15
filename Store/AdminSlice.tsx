import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  VendorNameForAdmin: string;
  PropertyNameForAdminVerificationForAdmin: string;
  emailForAdmin: string;
  cityForAdmin: string;
  countryForAdmin: string;
  propertyID: string;
}

const initialState: AuthState = {
  VendorNameForAdmin: "",
  PropertyNameForAdminVerificationForAdmin: "",
  emailForAdmin: "",
  cityForAdmin: "",
  countryForAdmin: "",
  propertyID: "",
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setVendorNameForAdmin: (state, action: PayloadAction<string>) => {
      state.VendorNameForAdmin = action.payload;
    },
    setPropertyNameForAdmin: (state, action: PayloadAction<string>) => {
      state.PropertyNameForAdminVerificationForAdmin = action.payload;
    },
    setPropertyIDForAdmin: (state, action: PayloadAction<string>) => {
      state.propertyID = action.payload;
    },
    setEmailForAdmin: (state, action: PayloadAction<string>) => {
      state.emailForAdmin = action.payload;
    },
    setCityForAdmin: (state, action: PayloadAction<string>) => {
      state.cityForAdmin = action.payload;
    },
    setCountryForAdmin: (state, action: PayloadAction<string>) => {
      state.countryForAdmin = action.payload;
    },
  },
});

export const {
  setVendorNameForAdmin,
  setPropertyNameForAdmin,
  setEmailForAdmin,
  setCityForAdmin,
  setCountryForAdmin,
  setPropertyIDForAdmin,
} = AdminSlice.actions;

export default AdminSlice.reducer;
