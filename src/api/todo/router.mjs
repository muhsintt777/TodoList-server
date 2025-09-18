import { Router } from "express";
import { deleteTodo, getTodos, postTodo, putTodo } from "./controller.mjs";

const router = Router();

router.get("/", getTodos);

router.post("/", postTodo);

router.put("/:id", putTodo);

router.delete("/:id", deleteTodo);

export { router as todoRouter };
