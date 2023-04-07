import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TodoList");
  } catch (err) {
    console.log(err);
  }
};
