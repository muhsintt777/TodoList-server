import Express, { json } from "express";
import cors from "cors";
import { todoRouter } from "./todo/router.mjs";
import { connectDb } from "./config/dbConn.js";
import mongoose from "mongoose";
const PORT = process.env.PORT || 3500;
const app = Express();
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
