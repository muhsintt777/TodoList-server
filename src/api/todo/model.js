import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    text: String,
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TodoModel = model("Todo", todoSchema);
