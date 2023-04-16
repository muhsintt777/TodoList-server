import { Router } from "express";
import { deleteTodo, getTodos, postTodo, putTodo } from "./controller.mjs";

const router = Router();

let todos = [{ id: "abcdef", text: "bike wash", isDone: false }];

router.get("/", getTodos);

router.post("/", postTodo);

router.put("/:id", putTodo);

router.delete("/:id", deleteTodo);

export { router as todoRouter };
