import mongoose from "mongoose";
import config from "../config/env";

const connectDB = async () => {
  try {
    await mongoose.connect(config.DB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
