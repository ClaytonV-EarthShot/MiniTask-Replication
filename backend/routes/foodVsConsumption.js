const express = require('express');
const {
  getFoodVsConsumption,
  createFoodVsConsumption
} = require('../controllers/foodVsConsumptionController')

const router = express.Router();

// GET a single bucket item
router.get('/:id', getFoodVsConsumption);

// POST a new bucket item
router.post('/', createFoodVsConsumption);

module.exports = router;