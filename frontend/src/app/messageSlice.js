import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setmessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setmessage } = messageSlice.actions;

export default messageSlice.reducer;
