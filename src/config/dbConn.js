import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
};
