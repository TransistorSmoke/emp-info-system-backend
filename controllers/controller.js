const Employee = require('../models/employee');

const employee = (req, res) => {
  const { name, badge } = req.body;
  const employee = new Employee({ name, badge });

  employee.save((err, success) => {
    if (err) {
      console.log('Save error: ', err);
      return res.status(401).json({
        error: 'Error saving new employee data',
      });
    }

    return res.json({
      success: 'New employee added to the database',
    });
  });
};

module.exports = employee;
