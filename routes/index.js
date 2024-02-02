const express = require("express");
const router = express.Router();
const studentRouter = require("./student_routes");
const authRouter = require("../routes/auth");

router.use("/dashboard", studentRouter);
router.use("/auth", authRouter);
module.exports = router;
