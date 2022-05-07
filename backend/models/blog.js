import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
