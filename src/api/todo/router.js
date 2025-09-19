import { Router } from "express";
import { TodoController } from "./controller.js";

const router = Router();

router.get("/", TodoController.getAllTodos);

router.post("/", TodoController.createTodo);

router.put("/:id", TodoController.updateTodo);

router.delete("/:id", TodoController.deleteTodo);

export { router as todoRouter };
