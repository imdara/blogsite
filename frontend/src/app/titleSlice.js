import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    settitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { settitle } = titleSlice.actions;

export default titleSlice.reducer;
