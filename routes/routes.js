const express = require('express');
const router = express.Router();
const {
  saveEmployeeInfo,
  getAllEmployees,
} = require('../controllers/controller');

router.post('/employees', saveEmployeeInfo);
router.get('/employees', getAllEmployees);

module.exports = router;
