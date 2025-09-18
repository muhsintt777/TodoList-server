import cors from "cors";
import Express from "express";

import { todoRouter } from "../api/todo/router.mjs";

const app = Express();

app.use(Express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/todo", todoRouter);

export { app };