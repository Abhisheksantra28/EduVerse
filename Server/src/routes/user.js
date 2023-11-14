import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

router.get("/register", createUser);

export default router;
