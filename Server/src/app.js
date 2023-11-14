import express from "express";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//using routes
app.use("/api/v1/users", userRouter);

export default app;
