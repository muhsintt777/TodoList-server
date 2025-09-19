import cors from "cors";
import Express from "express";

import { todoRouter } from "../api/todo/router.js";

const app = Express();

app.use(Express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/todo", todoRouter);

app.use((err, req, res, next) => {
  console.log("err: \n", err.name, "\t", err.message);
  res.status(500).json({ error: err.message || "Something went wrong!" });
});

export { app };
