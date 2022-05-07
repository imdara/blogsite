import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const bodySlice = createSlice({
  name: "body",
  initialState,
  reducers: {
    setbody: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setbody } = bodySlice.actions;

export default bodySlice.reducer;
