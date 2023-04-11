import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../sllices/basketSlice"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
