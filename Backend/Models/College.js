const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeName: String,
  collegeDirector: String,
  collegeEstablishedYear: Number,
  coursesAvailable: [String],
  totalAlumni: Number,
});

module.exports = mongoose.model("College", collegeSchema);
