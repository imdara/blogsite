import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setname: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setname } = nameSlice.actions;

export default nameSlice.reducer;
