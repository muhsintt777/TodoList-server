import mongoose from "mongoose";
import { ENV } from "./env.js";

mongoose.set("strictQuery", false);

export const connectDb = () => {
  try {
    console.log(ENV);
    
 
  } catch (err) {
    console.log(err);
  }
};
