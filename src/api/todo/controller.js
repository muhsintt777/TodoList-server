import { TodoService } from "./service.js";

export class TodoController {
  static async getAllTodos(req, res) {
    const todos = await TodoService.getAllTodo();
    if (!todos.length) {
      res.status(204).json();
      return;
    }
    res.status(200).json(todos);
    return;
  }

  static async createTodo(req, res) {
    const todoId = await TodoService.addTodo(req.body?.text);
    res.status(201);
    res.json({ id: todoId });
    return;
  }

  static async updateTodo(req, res) {
    await TodoService.updateTodo(req.params.id, req.body);
    res.status(200).json();
    return;
  }

  static async deleteTodo(req, res) {
    const id = req.params.id;
    await TodoService.deleteTodo(id);
    res.status(200).json();
    return;
  }
}
