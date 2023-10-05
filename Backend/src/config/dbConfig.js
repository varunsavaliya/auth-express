import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`connected to DB: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
