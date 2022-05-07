import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setpassword: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setpassword } = passwordSlice.actions;

export default passwordSlice.reducer;
