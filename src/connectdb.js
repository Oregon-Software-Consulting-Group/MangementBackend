const mongoose = require("mongoose");
require('dotenv').config();

async function connectDB() {
  try {
    const { MONGODB_URL } = process.env;
    if (!MONGODB_URL) {
      throw("No MONGODB_URL environment variable has been defined in config.env")
    }

    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

async function disconnectDB() {
  await mongoose.connection.close();
}

module.exports = {
  connectDB,
  disconnectDB
};
  
