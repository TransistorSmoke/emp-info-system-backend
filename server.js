const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Allow usage of environment variables
require('dotenv').config();

// Set middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('assets'));
app.use(express.static('assets/employees'));

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

if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: `${process.env.FE_ORIGIN}`,
    })
  );
}

// Routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server now running at PORT ${PORT}`);
});
