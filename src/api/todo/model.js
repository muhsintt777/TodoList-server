import { model, Schema } from "mongoose";

const todoSchema = new Schema({
  text: String,
  isDone: Boolean,
});

export const TodoModel = model("Todo", todoSchema);
