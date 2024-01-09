require('dotenv'). config();

const express = require('express');
const cityRoutes = require('./routes/cities');
const mongoose = require('mongoose');

// express
const app = express()

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// route handler
app.use('/api/cities', cityRoutes);

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

