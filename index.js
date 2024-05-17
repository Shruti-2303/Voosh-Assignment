const express = require("express");
const connection = require("./config/database");
require("dotenv").config();
const app = express();

connection();

app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
