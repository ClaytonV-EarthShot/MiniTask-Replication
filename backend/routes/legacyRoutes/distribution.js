const express = require('express');
const {
  getDistribution,
  createDistribution
} = require('../../controllers/legacyControllers/distributionController');

const router = express.Router();

// GET a single bucket item
router.get('/:id', getDistribution);

// POST a new bucket item
router.post('/', createDistribution);

module.exports = router;