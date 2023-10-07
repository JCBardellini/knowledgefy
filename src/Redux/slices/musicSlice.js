import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice( {
    name: "musicData",
    initialState:[]
    ,
    reducers: {
        populate: (state, action) => {
            console.log(action.payload);
            state.length = 0;
            state.push(...action.payload)
        }
    },
});

export const { populate } = musicSlice.actions;
export default musicSlice.reducer;