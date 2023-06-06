import { configureStore, createReducer } from "@reduxjs/toolkit";
import allProductSlice from "./Slices/allProductSlice";

export default configureStore({
  reducer: {
    allProductSlice
  },
});
