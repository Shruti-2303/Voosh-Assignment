const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Helper function to generate JWT
const generateToken = (user) => {
  const payload = { id: user.id };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = generateToken(req.user);
    res.json({ token });
  }
);

// GitHub OAuth routes
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    const token = generateToken(req.user);
    res.json({ token });
  }
);

module.exports = router;
