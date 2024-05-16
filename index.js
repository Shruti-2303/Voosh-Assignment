const express = require("express");
const connection = require("./config/database");
require("dotenv").config();
const app = express();

connection();

app.use(express.json());
app.listen(() => console.log(`Server started on port 3000`));
