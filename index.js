const express = require("express");
const connection = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const passport = require("passport");
require("./config/passport.js")(passport);
const session = require("express-session");
require("dotenv").config();
const swaggerDocs = require("./config/swagger");

const app = express();

//Database connection
connection();

app.use(express.json());
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);

swaggerDocs(app);

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
