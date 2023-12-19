import express from "express";
import userRouter from "./routes/user.router.js";
import contactRouter from "./routes/contact.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/form", contactRouter);






export default app;
