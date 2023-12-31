import { asyncHander } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createUser = asyncHander(async (req, res, next) => {
  const { username, email, phone, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).json({
      success: false,
      message: "User Already Exists",
    });
  }

  const newUser = await User.create({
    username,
    email,
    phone,
    password,
  });
  res.status(201).json({
    success: true,
    message: "User Registered Successfully !!",
    token: await newUser.generateToken(),
    userId: newUser._id,
  });
});

export const userLogin = asyncHander(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    // return res.status(400).json({
    //   success: false,
    //   message: "Invalid Credentials",
    // });
    throw new ErrorHandler("Invalid Credentials!", 400);
  }

  // const isMatch = await bcrypt.compare(password, user.password);
  const correctPassword = await user.isMatch(password);

  if (correctPassword) {
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token: await user.generateToken(),
      userId: user._id,
    });
  } else {
    // res.status(401).json({
    //   success: false,
    //   message: "Invalid email or password!",
    // });

    throw new ErrorHandler("Invalid email or password!", 401);
    
  }
});
