import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import userReducer from "./slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});