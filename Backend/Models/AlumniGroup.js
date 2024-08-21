const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  branch: { type: String, required: true },
  collegeName: { type: String, required: true },
  degree: { type: String, required: true },
  batch: { type: String, required: true },
  currentCompany: { type: String, required: true },
  position: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true }
});

module.exports = mongoose.model("alumnilist", alumniSchema);
