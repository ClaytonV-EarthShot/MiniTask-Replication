const express = require('express');
const {
  getEconomic,
  createEconomic
} = require('../../controllers/bucketOne/economicController');

const router = express.Router();

// GET a single bucket item
router.get('/:id', getEconomic);

// POST a new bucket item
router.post('/', createEconomic);

module.exports = router;