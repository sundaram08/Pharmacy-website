import { configureStore } from "@reduxjs/toolkit";
import medicineReducer from "../features/medicineSlice";
import userReducer from '../features/userSlice'

export const store = configureStore({
    reducer: {
      medicine: medicineReducer,
      user: userReducer
    },
});
  