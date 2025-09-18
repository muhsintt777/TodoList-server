import { TodoModel } from "./model.js";

export class TodoService {
  static async getAllTodo() {
    const todos = await TodoModel.find().exec();
    return todos;
  }

  static async addTodo(data) {
    const newData = new TodoModel(data);
    return newData.save();
  }

  static async deleteTodo(id) {
    return TodoModel.deleteOne({ _id: id }).exec();
  }

  static async updateTodo(id, data) {
    return TodoModel.updateOne({ _id: id }, data).exec();
  }
}
