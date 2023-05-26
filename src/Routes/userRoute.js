const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
} = require("../Controllers/userController");
const { isAuthenticatedUser } = require("../Middleware/authMiddleware");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
// router.route("/my-account").get(getUserDetails);

module.exports = router;
