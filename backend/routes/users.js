import { Router } from "express";
import {
  getAllUsers,
  logUserIn,
  signUserUp,
} from "../controllers/usersController.js";

const router = Router()
  .get("/", getAllUsers)
  .post("/login", logUserIn)
  .post("/signup", signUserUp);

export default router;
