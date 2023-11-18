import express from "express";
import { userLogin, createUser } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register", createUser);
router.post("/login", userLogin);

export default router;
