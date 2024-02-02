const scholarshipModel = require("../models/scholarship_model");

class ScholarshipAssignmentAlgorithmService {
  static assignScholarships(studentData) {
    const studentDataDetails = [];
    studentDataDetails.push(studentData);
    const gpaThreshold = 3.5;
    const incomeThreshold = 50000;
    const requiredActivity = "Sports";
    const scholarships = [];

    studentDataDetails.forEach(async (student) => {
      const isEligible =
        student.gpa >= gpaThreshold &&
        student.familyIncome <= incomeThreshold &&
        student.activities.includes(requiredActivity);
      if (isEligible) {
        scholarships.push({
          name: student.name,
          email: student.email,
          scholarshipType: "Merit-Based",
        });
        const newScholarship = new scholarshipModel({
          name: student.name,
          email: student.email,
          scholarshipType: "Merit-Based",
        });
        await newScholarship.save();
      }
    });

    return scholarships;
  }

  getAllEligibleStundent = () => {
    const response = scholarshipModel.find({});
    return response;
  };
}

module.exports = ScholarshipAssignmentAlgorithmService;
