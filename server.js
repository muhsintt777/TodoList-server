import * as  dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import cors from "cors";
import Express from "express";

import { ENV } from "./src/config/env.js";
import { todoRouter } from "./src/todo/router.mjs";
import { connectDb } from "./src/config/dbConn.js";
const app = Express();
connectDb();

app.use(Express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/todo", todoRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  const PORT = ENV.PORT;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
