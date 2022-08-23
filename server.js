const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const morgan = require('morgan');

// Allow usage of environment variables
require('dotenv').config();

// Set middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  console.log(`You have hit the ${req.originalUrl} route`);

  return res.json({
    success: `You have successfully hit the ${req.originalUrl} route`,
  });
});

app.listen(PORT, () => {
  console.log(`Server now running at PORT ${PORT}`);
});
