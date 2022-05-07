import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setemail: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setemail } = emailSlice.actions;

export default emailSlice.reducer;
