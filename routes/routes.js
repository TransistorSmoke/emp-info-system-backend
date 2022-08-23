const express = require('express');
const router = express.Router();
const employee = require('../controllers/controller');

router.post('/employees', employee);

module.exports = router;
