const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// Allow usage of environment variables
require('dotenv').config();

// Set middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// app.get('/api', (req, res) => {
//   console.log(`You have hit the ${req.originalUrl} route`);

//   return res.json({
//     success: `You have successfully hit the ${req.originalUrl} route`,
//   });
// });

// Routes
app.use('/api', routes);

// Connect to the database
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () =>
    console.log(
      `Connection to database has been made. DATABASE = ${process.env.DATABASE}`
    )
);

app.listen(PORT, () => {
  console.log(`Server now running at PORT ${PORT}`);
});
