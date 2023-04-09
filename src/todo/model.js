import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
  text: String,
  isDone: Boolean,
});

export default mongoose.model("Todos", todoSchema);
