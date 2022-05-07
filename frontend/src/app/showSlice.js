import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const showSlice = createSlice({
  name: "showStatus",
  initialState,
  reducers: {
    show: (state) => {
      // code to set show state to true
      state.value = true;
    },
    hide: (state) => {
      // code to set show state to false
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide } = showSlice.actions;

export default showSlice.reducer;
