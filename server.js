import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import Express, { json } from "express";
const app = Express();
import { todoRouter } from "./src/todo/router.mjs";
import { connectDb } from "./src/config/dbConn.js";
const PORT = process.env.PORT || 3500;
connectDb();

app.use(json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/todo", todoRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
