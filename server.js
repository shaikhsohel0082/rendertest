import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/new", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((error) => console.error("Error connecting to db", error));

app.get("/", (req, res) => {
  res.send("render");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
