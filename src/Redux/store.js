// import the store
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/userSlices"




// configure store
export const store = configureStore({
  reducer: {
    // we put our slices here
    userAuth: userAuthReducer,
    
  }
})
