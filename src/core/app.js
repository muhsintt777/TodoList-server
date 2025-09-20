import cors from "cors";
import Express from "express";

import { todoRouter } from "../api/todo/router.js";
import { CustomError } from "../utils/customError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const app = Express();

app.use(Express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/todo", todoRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("err: \n", err.name, "\t", err.message);

  if (err instanceof CustomError) {
    res
      .status(err.statusCode)
      .json(
        new ApiResponse({ errorType: err.errorType, message: err.message })
      );
    return;
  } else if (err instanceof Error) {
    res.status(500).json(new ApiResponse({ error: err.message }));
    return;
  } else {
    res.status(500).json(new ApiResponse({ error: "Unknown error" }));
    return;
  }
});

export { app };
