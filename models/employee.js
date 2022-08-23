const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 32,
    required: true,
    trim: true,
  },
  badge: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    trim: true,
  },
  designation: {
    type: String,
    maxLength: 20,
  },
  joinDate: {
    type: Date,
  },
  resignDate: {
    type: Date,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
