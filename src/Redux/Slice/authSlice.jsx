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
  },
});

export const { authinfo } = authSlice.actions;

export default authSlice.reducer;
