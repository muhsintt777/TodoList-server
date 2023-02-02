import { Router } from "express";
import { v4 } from "uuid";

const router = Router();

let todos = [{ id: "abcdef", text: "bike wash" }];

router.get("/", (req, res) => {
  res.json(todos);
});

router.post("/", (req, res) => {
  const text = req.body.text;
  const id = v4();
  todos.push({ id: id, text: text });
  res.json(todos);
});

router.put("/", (req, res) => {
  const id = req.body.id;
  const text = req.body.text;
  const data = todos.find((todo) => todo.id === id);
  data.text = text;
  res.json(todos);
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  const newArr = todos.filter((todo) => todo.id !== id);
  todos = newArr;
  res.json(todos);
});

export { router as todoRouter };
