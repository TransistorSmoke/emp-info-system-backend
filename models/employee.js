const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 32,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    maxLength: 32,
    required: true,
    trim: true,
  },
  badgeNumber: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  designation: {
    type: String,
    maxLength: 20,
  },
  joinDate: {
    type: Date,
    required: true,
  },
  resignDate: {
    type: Date,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
