import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  username: string;
}

const initialState: AuthState = {
  username: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUserForDashboard: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setLoggedInUserForDashboard } = UserSlice.actions;

export default UserSlice.reducer;
