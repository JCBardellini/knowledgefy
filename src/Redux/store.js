// import the store
import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./slices/templateSlice";



// configure store
export const store = configureStore({
  reducer: {
    // we put our slices here
    template: templateReducer,
  }
})
