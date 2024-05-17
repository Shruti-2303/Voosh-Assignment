const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  profileVisibility: {
    type: String,
    enum: ["public", "private"],
    default: "public",
  },
  name: String,
  bio: String,
  phone: String,
  email: { type: String, unique: true },
  photo: String,
  googleId: String,
  githubId: String,
});

module.exports = mongoose.model("User", userSchema);
