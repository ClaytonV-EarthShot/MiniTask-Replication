require('dotenv'). config();

const express = require('express');
const mongoose = require('mongoose');

// Test Route
const cityRoutes = require('./routes/cities');

// Country Route
const countryRoutes = require('./routes/countries');

//Bucket #1 Routes
const bucketOneRoutes = require('./routes/bucketOne');

// express
const app = express()

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Test Route Handler
app.use('/api/cities', cityRoutes);

// Country Route Handler
app.use('/api/countries', countryRoutes);

// Bucket #1 Route Handler
app.use('/api/bucketone', bucketOneRoutes);

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

