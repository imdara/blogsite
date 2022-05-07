import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    login: (state, action) => {
      // code to set login state to true
      state.value = true;
    },
    logout: (state, action) => {
      // code to set login state to false
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
