const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const password = process.env.DB_PASWORD;
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://chatproject51:" +
        password +
        "@cluster0.zegp9pg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
