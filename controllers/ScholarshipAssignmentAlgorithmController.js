const ScholarshipAlgorithm = require("../services/ScholarshipAssignmentAlgorithmService");
const scholarshipAlgorithmInstance = new ScholarshipAlgorithm();

const assignScholarships = async (req, res) => {
  const studentData = req.body;
  try {
    const scholarships = ScholarshipAlgorithm.assignScholarships(studentData);
    if (scholarships.length) {
      res
        .status(200)
        .json({ scholarships, message: "Eligible for scholarship." });
    } else {
      res.json({ message: "Not eligible for scholarship." });
    }
  } catch (error) {
    console.error("Error assigning scholarships:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEligibleStudent = async (req, res) => {
  try {
    const response =
      await scholarshipAlgorithmInstance.getAllEligibleStundent();
    res.status(200).json({
      response: response,
      message: "Student data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { assignScholarships, getEligibleStudent };
