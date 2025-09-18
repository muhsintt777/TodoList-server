import mongoose from "mongoose";
import { ENV } from "./env.js";

mongoose.set("strictQuery", false);

export const connectDb = () => {
  try {
    console.log(ENV);
    
    mongoose.connect(ENV.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};
