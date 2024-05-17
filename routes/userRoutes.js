/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, password, email, and role.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [user, admin]
 *     responses:
 *       200:
 *         description: Successful registration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authenticated user
 *       400:
 *         description: Bad request, user already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login
 *     description: Authenticate user with provided username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authenticated user
 *       400:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 */

/**
 * @swagger
 * /api/users/profile/{id}:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve user profile information by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user profile to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 *       403:
 *         description: Access denied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 * components:
 *   schemas:
 *     UserProfile:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the user profile
 *         username:
 *           type: string
 *           description: User's username
 *         email:
 *           type: string
 *           description: User's email address
 *         role:
 *           type: string
 *           description: User's role
 *         profileVisibility:
 *           type: string
 *           description: Visibility settings for the user's profile
 */

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Update user profile
 *     description: Update user profile information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               bio:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               profileVisibility:
 *                 type: string
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 * components:
 *   schemas:
 *     UserProfile:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the user profile
 *         username:
 *           type: string
 *           description: User's username
 *         email:
 *           type: string
 *           description: User's email address
 *         role:
 *           type: string
 *           description: User's role
 *         profileVisibility:
 *           type: string
 *           description: Visibility settings for the user's profile
 */

/**
 * @swagger
 * /api/users/upload-photo:
 *   post:
 *     summary: Upload user photo
 *     description: Upload a photo for the user.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User photo uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 * components:
 *   schemas:
 *     UserProfile:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the user profile
 *         username:
 *           type: string
 *           description: User's username
 *         email:
 *           type: string
 *           description: User's email address
 *         role:
 *           type: string
 *           description: User's role
 *         profileVisibility:
 *           type: string
 *           description: Visibility settings for the user's profile
 *         photo:
 *           type: string
 *           description: Path to the uploaded photo
 */

/**
 * @swagger
 * /api/users/public-profiles:
 *   get:
 *     summary: List public profiles
 *     description: Retrieve a list of public user profiles.
 *     responses:
 *       200:
 *         description: List of public user profiles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserProfile'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message
 * components:
 *   schemas:
 *     UserProfile:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the user profile
 *         username:
 *           type: string
 *           description: User's username
 *         email:
 *           type: string
 *           description: User's email address
 *         role:
 *           type: string
 *           description: User's role
 *         profileVisibility:
 *           type: string
 *           description: Visibility settings for the user's profile
 */

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const role = require("../middleware/role");
const {
  signup,
  login,
  getUserProfile,
  updateProfile,
  uploadPhoto,
  listPublicProfiles,
  logoutUser,
} = require("../controllers/userController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile/:id", auth, getUserProfile);
router.put("/profile", auth, updateProfile);
router.post("/profile/photo", auth, upload.single("photo"), uploadPhoto);
router.get("/profiles", listPublicProfiles);
router.post("/logout", auth, logoutUser);
module.exports = router;
