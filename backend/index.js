import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Server running"));

app.listen(port, () => console.log(`Server listening on ${port}`));
