const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");
router.use(express.json());

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);
router.get("/signout", authController.signOut);

module.exports = router;
