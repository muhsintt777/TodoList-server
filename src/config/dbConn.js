import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
};
