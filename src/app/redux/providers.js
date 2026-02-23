"use client";
import { Provider } from "react-redux";
import { store } from "./store"; // ensure this path is correct

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}