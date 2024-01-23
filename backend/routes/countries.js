const express = require('express');
const {
  createCountry,
  getCountries,
  getCountry,
  deleteCountry,
  updateCountry
} = require('../controllers/countryController')

const router = express.Router();

// GET all cities
router.get('/', getCountries);

// GET a single city
router.get('/:id', getCountry);

// POST a new city
router.post('/', createCountry);

// DELETE a city
router.delete('/:id', deleteCountry);

// UPDATE a city
router.patch('/:id', updateCountry);

module.exports = router;