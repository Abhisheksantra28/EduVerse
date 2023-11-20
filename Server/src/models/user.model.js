import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const saltRound = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, saltRound);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isMatch = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    next(error);
  }
};

//json web token
userSchema.methods.generateToken = function () {
 
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        isAdmin: this.isAdmin,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

};

export const User = new mongoose.model("User", userSchema);
