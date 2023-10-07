// import the store
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userSlices"
import musicReducer from "./slices/musicSlice" 





// configure store
export const store = configureStore({
  reducer: {
    // we put our slices here
    userAuth: authReducer,
    music: musicReducer,
  }, 
})
