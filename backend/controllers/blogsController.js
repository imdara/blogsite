// importing models
import Blog from "../models/blog.js";

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
};

export const postBlogs = async (req, res) => {
  const { title, body, author } = req.body;
  if (body.length >= 10) {
    const blog = await Blog.create({ title, body, author });
    res.send("Blog posted successfully");
  } else res.send("Body has to be more than 10 characters long");
};
