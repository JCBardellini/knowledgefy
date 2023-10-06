import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice( {
    name: "userAuth",
    initialState: {
        accessToken: null,
    },
    reducers: {
        setAccessToken: ( state, action ) => {
            state.accessToken = action.payload;
        },
    },
});

export const { setUserProfile } = userAuthSlice.actions;
export default userAuthSlice.reducer;