import { configureStore } from "@reduxjs/toolkit";
import medicineReducer from "../features/medicineSlice";

export const store = configureStore({
    reducer: {
      medicine: medicineReducer,
    },
});
  