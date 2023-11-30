import zod from "zod";

// Create an object schema using zod

export const signupSchema = zod.object({
  username: zod
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters!" })
    .max(255, { message: "Name must not be more than 255 characters!" }),

  email: zod
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be atleast of 3 characters!" })
    .max(255, { message: "email must not be more than 255 characters!" }),

  phone: zod
    .string({ required_error: "phone number is required" })
    .trim()
    .min(10, { message: "phone number be atleast of 10 characters!" })
    .max(20, { message: "phone number not be more than 20 characters!" }),

  password: zod
    .string({ required_error: "password is required" })
    .min(6, { message: "password must be atleast of 6 characters!" })
    .max(1024, {
      message: "password should not be greater than 1024 characters!",
    }),
});


export const userLoginSchema = zod.object({
  email: zod
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters!" })
    .max(255, { message: "Email must not be more than 255 characters!" }),

  password: zod
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters!" })
    .max(1024, {
      message: "Password should not be greater than 1024 characters!",
    }),
});


