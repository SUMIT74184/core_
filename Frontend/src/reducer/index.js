import { combineReducer } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice"
import profileReducer from "../Slices/profileSlice";
import cartReducer from "../Slices/cartSlice";


const rootReducer = combineReducer({
  auth: authReducer,
  profile: profileReducer,
  cart: cartReducer,
})

export default rootReducer;