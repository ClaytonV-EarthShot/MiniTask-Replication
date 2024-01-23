require('dotenv'). config();

const express = require('express');
const cityRoutes = require('./routes/cities');
const countryRoutes = require('./routes/countries');
const foodVsConsumptionRoutes = require('./routes/foodVsConsumption');
const bucketOneRoutes = require('./routes/bucketOne');
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
app.use('/api/countries', countryRoutes);
app.use('/api/foodvsconsumption', foodVsConsumptionRoutes)
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

