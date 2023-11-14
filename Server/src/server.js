import app from "./app.js";
import dotenv, { configDotenv } from "dotenv";

dotenv.config({
  path:"./.env"
})

app.get("/", (req, res) => {
  res.status(200).send("<h1>Server is working fine</h1>");
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});
