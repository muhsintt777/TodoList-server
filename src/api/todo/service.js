import { isValidObjectId } from "mongoose";
import { TodoModel } from "./model.js";
import { CustomError, ERROR_TYPE } from "../../utils/customError.js";

export class TodoService {
  static async getAllTodo() {
    const todos = await TodoModel.find()
      .limit(20)
      .sort({ createdAt: -1 })
      .lean();
    if (!todos.length) return [];
    return todos;
  }

  static async addTodo(text) {
    if (typeof text !== "string") {
      throw new CustomError(ERROR_TYPE.VALIDATION_ERROR, "Text is required");
    }

    const todo = await TodoModel.create({ text });
    return todo.id;
  }

  static async deleteTodo(id) {
    if (!isValidObjectId(id)) {
      throw new CustomError(ERROR_TYPE.VALIDATION_ERROR, "Invalid id");
    }

    await TodoModel.deleteOne({ _id: id });
  }

  static async updateTodo(id, todoDetails) {
    if (!isValidObjectId(id)) {
      throw new CustomError(ERROR_TYPE.VALIDATION_ERROR, "Invalid id");
    }
    if (todoDetails.text === undefined && todoDetails.isDone === undefined) {
      throw new CustomError(ERROR_TYPE.VALIDATION_ERROR, "Nothing to update");
    }
    if (
      (todoDetails.text && typeof todoDetails?.text !== "string") ||
      (todoDetails.isDone && typeof todoDetails?.isDone !== "boolean")
    ) {
      throw new CustomError(
        ERROR_TYPE.VALIDATION_ERROR,
        "Invalid update details"
      );
    }

    await TodoModel.updateOne({ _id: id }, todoDetails);
  }
}
