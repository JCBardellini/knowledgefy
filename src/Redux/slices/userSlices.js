import { createSlice } from "@reduxjs/toolkit";
// example of the counter- will use this layout for the template to help me do the rest of my files. 
const userSlice = createSlice({
    name: "user",
    initialState: 0,
    reducers: {
        // our functions
        incrementTemplate: ( state ) => state + 1,
        decrementTemplate:( state ) => state - 1
    }
});
// below we put all of our reducers, 
export const { incrementTemplate, decrementTemplate } = userSlice.actions;

export default userSlice.reducer;