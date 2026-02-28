"use client";
import { Provider } from "react-redux";
import { store } from "./store"; // ensure this path is correct
import { useEffect } from "react";
import { hydrateUsers } from "./slice";

export function Providers({ children }) {
  useEffect(() => {
    // Hydrate state from localStorage on client side
    if (typeof window !== 'undefined') {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (storedUsers.length > 0) {
        store.dispatch(hydrateUsers(storedUsers));
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}