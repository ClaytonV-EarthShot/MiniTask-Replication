const express = require('express');
const {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity
} = require('../controllers/cityController')

const router = express.Router();

// GET all cities
router.get('/', getCities);

// GET a single city
router.get('/:id', getCity);

// POST a new city
router.post('/', createCity);

// DELETE a city
router.delete('/:id', deleteCity);

// UPDATE a city
router.patch('/:id', updateCity);

module.exports = router;