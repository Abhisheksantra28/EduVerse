import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(
      `Databse Connected !! DB Host:${connectionInstance.connection.host}`
    );

  } catch (error) {
    console.log("MongoDb connection Error:", error);
    process.exit(1);
  }
};
