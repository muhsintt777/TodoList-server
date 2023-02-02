import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TodoList");
  } catch (err) {
    console.log(err);
  }
};
