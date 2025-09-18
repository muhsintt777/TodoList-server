import 'dotenv/config';

import { ENV } from '../config/env.js';
import mongoose from 'mongoose';

const startServer = async () => {
  try {
    // validate env
    Object.entries(ENV).forEach(([key, value]) => {
      if (value === undefined) {
        throw new Error(`Missing env variable: ${key}`);
      }
    });

    await mongoose.connect(ENV.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('---MongoDB connected---');


  } catch (error) {
    console.log("Failed to start server: \n", error.message);
    process.exit(1);
  }
}

startServer();


// mongoose.connection.once("open", () => {
//   console.log("Connected to DB");
//   const PORT = ENV.PORT;
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });