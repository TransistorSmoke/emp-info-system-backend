const Employee = require('../models/employee');

const saveEmployeeInfo = (req, res) => {
  const employeeInfo = req.body;
  const employee = new Employee(employeeInfo);
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  r;
  employee.save((err, success) => {
    const { firstname, lastname } = employee;
    if (err) {
      console.log('Save error: ', err);
      return res.status(401).json({
        error: 'Error saving new employee data',
      });
    }

    return res.json({
      success: `New employee (${lastname}, ${firstname}) added to the database`,
    });
  });
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    const { name, badge } = employees[0];

    return res.status(200).json({
      employees,
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
};

module.exports = { saveEmployeeInfo, getAllEmployees };
