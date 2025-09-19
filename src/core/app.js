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
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export { app };
