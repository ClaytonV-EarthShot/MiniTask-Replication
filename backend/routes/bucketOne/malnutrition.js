const express = require('express');
const {
  getMalnutrition,
  createMalnutrition
} = require('../../controllers/bucketOne/malnutritionController');

const router = express.Router();

// GET a single bucket item
router.get('/:id', getMalnutrition);

// POST a new bucket item
router.post('/', createMalnutrition);

module.exports = router;