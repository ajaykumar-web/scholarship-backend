const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  scholarshipType: { type: String },
  amount: { type: Number },
});

const scholarshipModel = mongoose.model("Eligible Students", scholarshipSchema);

module.exports = scholarshipModel;
