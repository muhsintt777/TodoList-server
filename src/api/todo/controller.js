import { TodoService } from "./service.js";

export const getTodos = async (req, res) => {
  const todos = await TodoService.getAllTodo();
  res.json(todos);
};

export const postTodo = async (req, res) => {
  const response = await TodoService.addTodo(req.body);
  res.status(201);
  res.json(response);
};

export const putTodo = async (req, res) => {
  const response = await TodoService.updateTodo(req.params.id, req.body);
  res.json(response);
};

export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  const response = await TodoService.deleteTodoService(id);
  res.json(response);
};
