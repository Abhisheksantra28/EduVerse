import express from "express";
import { userLogin, createUser } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { signupSchema, userLoginSchema } from "../utils/authValidator.js";

const router = express.Router();

router.post("/register", validate(signupSchema), createUser);
router.post("/login", validate(userLoginSchema), userLogin);

export default router;
