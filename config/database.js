const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB is connected successfully");
});

connection.on("error", (error) => {
  console.log("There was an error connecting to MongoDb", error);
});

module.exports = mongoose;
