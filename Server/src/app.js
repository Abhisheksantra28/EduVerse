import express from "express";
import userRouter from "./routes/user.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// using middlewares
app.use(errorMiddleware)



//using routes
app.use("/api/v1/users", userRouter);

export default app;
