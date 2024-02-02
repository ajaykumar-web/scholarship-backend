const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const emailController = require("../../controllers/send-email.controller")

router.get("/", auth, emailController.sendEmail);

module.exports = router;