const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    maxLength: 50,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    maxLength: 50,
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
});

// Virtuals

// Methods

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
