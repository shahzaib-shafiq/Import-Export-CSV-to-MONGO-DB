import mongoose from "mongoose";
import express from "express";
import userRoute from "./route/userRoutes";
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/CSV");

app.use("/", userRoute);
app.listen(port, () => {
  console.log(`listening on port typescript server${3000}`);
});
