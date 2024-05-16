const express = require("express");
const app = express();
app.use(express.json());
app.listen(() => console.log(`Server started on port 3000`));
