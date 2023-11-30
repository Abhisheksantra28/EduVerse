import express from "express";
import userRouter from "./routes/user.js";
import { errorMiddleware } from "./utils/errorHandler.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));





//using routes
app.use("/api/v1/users", userRouter);

export default app;
