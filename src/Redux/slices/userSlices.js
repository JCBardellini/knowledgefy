import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice( {
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

export const { setUserProfile } = AuthSlice.actions;
export default AuthSlice.reducer;