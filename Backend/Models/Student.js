const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  emailOrPhone: {
    type: String,
    required: true,
    unique: true // Ensures that email or phone numbers are unique
  },
  password: {
    type: String,
    required: true
  },
  collegeName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  yearOfStudy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
