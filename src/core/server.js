import * as dotenv from 'dotenv';
dotenv.config();

import { ENV } from '../config/env.js';
console.log(ENV);
console.log(process.env.PORT);



const startServer = async () => {
  try {
    // validate env
    Object.entries(ENV).forEach(([key, value]) => {
      if (!value) {
        throw new Error(`Missing env variable: ${key}`);
      }
    });
  } catch (error) {
    console.log("Failed to start server: \n", error.message);
    process.exit(1);
  }
}

startServer();