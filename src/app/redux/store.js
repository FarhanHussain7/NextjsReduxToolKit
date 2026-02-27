import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import userReducer from "./slice";
import todoReducer from "./todoslice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    todos: todoReducer,
  },
});