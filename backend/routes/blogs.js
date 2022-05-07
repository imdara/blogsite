import { Router } from "express";

// importing controller
import { getBlogs, postBlogs } from "../controllers/blogsController.js";

const router = Router().get("/", getBlogs).post("/", postBlogs);

export default router;
