require('dotenv'). config();

const express = require('express');
const mongoose = require('mongoose');

// express
const app = express()

// Log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// route handler
app.get('/', (req, res) => {
  res.json({mssg: 'Successfully reached the front page front end'});
})

// connect to db
mongoose.connect(process.env.MONGODB)
  .then(() => {
    // listener
    app.listen(process.env.PORT, () => {
      console.log('Successful connection to DB & listening on port', process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error)
  })

