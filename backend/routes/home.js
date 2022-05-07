import { Router } from "express";

const router = Router().get("/", (req, res) =>
  res.send({ status: 200, message: "Server working fine" })
);

export default router;
