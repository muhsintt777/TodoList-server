import { Router } from "express";
import { TodoController } from "./controller.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(TodoController.getAllTodos));

router.post("/", asyncHandler(TodoController.createTodo));

router.put("/:id", asyncHandler(TodoController.updateTodo));

router.delete("/:id", asyncHandler(TodoController.deleteTodo));

export { router as todoRouter };
