import { asyncHander } from "../utils/asyncHandler.js";
import { Contact } from "../models/contact.model.js";
import ErrorHandler from "../utils/errorHandler.js";

export const contactForm = asyncHander(async (req, res, next) => {
  const { name, email, message } = req.body;

  const newContact = await Contact.create({
    name,
    email,
    message,
  });

  if (!newContact) {
    throw new ErrorHandler("message not delivered!", 500);
  }

  res.status(200).json({
    success: true,
    message: "message sent successfully",
  });
});
