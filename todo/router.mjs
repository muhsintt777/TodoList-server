import { Router } from "express";
import { v4 } from "uuid";

const router = Router();

let todos = [{ id: "abcdef", text: "bike wash", isDone: false }];

router.get("/", (req, res) => {
  res.json({ todos });
});

router.post("/", (req, res) => {
  const text = req.body.text;
  const id = v4();
  const item = { id, text, isDone: false };
  text;
  todos.push(item);
  res.json(item);
});

router.put("/", (req, res) => {
  const id = req.body.id;
  const text = req.body.text;
  const isDone = req.body.isDone;

  const data = todos.find((todo) => todo.id === id);
  data.text = text;
  data.isDone = isDone;

  const newTodos = todos.filter((todo) => todo.id !== id);
  todos = [...newTodos, data];
  res.json(data);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const newArr = todos.filter((todo) => todo.id !== id);
  todos = newArr;
  res.json({ id });
});

export { router as todoRouter };
