const express = require('express');
const {
  getLifeAsWeKnow,
  createLifeAsWeKnow
} = require('../../controllers/bucketOne/lifeAsWeKnowController');

const router = express.Router();

// GET a single bucket item
router.get('/:id', getLifeAsWeKnow);

// POST a new bucket item
router.post('/', createLifeAsWeKnow);

module.exports = router;