import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/database.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    // Handle errors
    app.on("error", (error) => {
      console.error("Express server error:", error);
    });

    // Start the Express server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is working on http://localhost:${PORT}`);
    });
  })

  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.status(200).send("<h1>Server is working fine</h1>");
});
