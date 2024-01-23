const express = require('express');
const {
  getAgriculture,
  createAgriculture
} = require('../../controllers/bucketOne/agricultureController');

const router = express.Router();

// GET a single bucket item
router.get('/:id', getAgriculture);

// POST a new bucket item
router.post('/', createAgriculture);

module.exports = router;