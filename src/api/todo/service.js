import { isValidObjectId } from "mongoose";
import { TodoModel } from "./model.js";

export class TodoService {
  static async getAllTodo() {
    const todos = await TodoModel.find().limit(20).lean();
    if (!todos.length) return [];
    return todos;
  }

  static async addTodo(text) {
    if (typeof text !== "string") {
      throw new Error("Invalid text");
    }

    const todo = await TodoModel.create({ text });
    return todo.id;
  }

  static async deleteTodo(id) {
    if (!isValidObjectId(id)) throw new Error("Invalid ID");
    await TodoModel.deleteOne({ _id: id });
  }

  static async updateTodo(id, todoDetails) {
    if (!isValidObjectId(id)) throw new Error("Invalid ID");
    if (
      typeof todoDetails?.text !== "string" ||
      typeof todoDetails?.isDone !== "boolean"
    ) {
      throw new Error("Invalid details");
    }

    await TodoModel.updateOne({ _id: id }, todoDetails);
  }
}
