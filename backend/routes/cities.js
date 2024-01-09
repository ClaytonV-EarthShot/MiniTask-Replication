const express = require('express');
const {
  createCity,
  getCities,
  getCity
} = require('../controllers/cityController')

const router = express.Router();

// GET all cities
router.get('/', getCities);

// GET a single city
router.get('/:id', getCity);

// POST a new city
router.post('/', createCity)

module.exports = router;