import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      // code to add a blog
    },
    // deleteBlog: (state, action) => {
    //   // code to delete a blog
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;
