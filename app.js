require("dotenv").config();
const express = require("express");
const database = require("./config/database");

const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log("Server running on:" + port));
