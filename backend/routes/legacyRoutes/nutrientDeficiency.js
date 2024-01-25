const express = require('express');
const {
  getNutrientDeficiency,
  createNutrientDeficiency
} = require('../../controllers/bucketOne/nutrientDeficiencyController');

const router = express.Router();

// GET a single bucket item
router.get('/:id', getNutrientDeficiency);

// POST a new bucket item
router.post('/', createNutrientDeficiency);

module.exports = router;