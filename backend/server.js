require('dotenv'). config();

const express = require('express');

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

// listener
app.listen(process.env.PORT, () => {
  console.log('Successful listening on port', process.env.PORT);
})