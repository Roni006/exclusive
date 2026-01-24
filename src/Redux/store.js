import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice.jsx";
import cartReducer from "./Slice/cartSlice.jsx";
export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
