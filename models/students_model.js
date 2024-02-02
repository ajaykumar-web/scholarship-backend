const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  enrollmentDate: { type: String },
  state: { type: String, default: "Maharashtra" },
  gpa: { type: String },
  income: { type: String },
  activities: { type: String },
});

const studentModel = mongoose.model("Students", studentSchema);

module.exports = studentModel;
