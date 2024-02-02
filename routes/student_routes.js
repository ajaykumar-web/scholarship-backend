const express = require("express");
const app = express();
const router = express.Router();
const studentControllers = require("../controllers/student_controllers");
const scholarshipAssignmentAlgorithmController = require("../controllers/ScholarshipAssignmentAlgorithmController");
const multer = require("multer");
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/upload"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all-student", studentControllers.getStudent);
router.get(
  "/eligible-student",
  scholarshipAssignmentAlgorithmController.getEligibleStudent
);
router.post(
  "/add-student",
  upload.single("file"),
  studentControllers.addStudent
);
router.post(
  "/assign-scholarships",
  scholarshipAssignmentAlgorithmController.assignScholarships
);

module.exports = router;
