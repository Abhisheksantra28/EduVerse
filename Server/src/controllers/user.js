import { asyncHander } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const createUser = asyncHander(async (req, res, next) => {
  const { username, email, phone, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).json({
      success: false,
      message: "User Already Exists",
    });
  }

  const newUser = await User.create({ username, email, phone, password });
  res.status(201).json({
    success: true,
    message: "User Registered Successfully !!",
  });
});
