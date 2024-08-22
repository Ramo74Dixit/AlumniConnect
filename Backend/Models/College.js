const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeName: String,
  collegeDirector: String,
  collegeEstablishedYear: Number,
  coursesAvailable: [String],
  totalAlumni: Number,
  emailOrPhone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("College", collegeSchema);
