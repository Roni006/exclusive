import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: null,
  },
  reducers: {
    authinfo: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { authinfo, logout } = authSlice.actions;

export default authSlice.reducer;
