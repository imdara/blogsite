// importing modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

// importing routes
import homeRoute from "./routes/home.js";
import blogsRoute from "./routes/blogs.js";
import usersRoute from "./routes/users.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// implementing routes
app.use("/", homeRoute);
app.use("/blogs", blogsRoute);
app.use("/users", usersRoute);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(app.listen(PORT, () => console.log("Connected to the database")))
  .catch((err) => console.log(err));
