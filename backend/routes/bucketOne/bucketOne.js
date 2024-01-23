const express = require('express');
const {
  getBucketOne,
  createBucketOne
} = require('../../controllers/bucketOne/bucketOneController');

const router = express.Router();

// GET a single bucket
router.get('/:id', getBucketOne);

// POST a new bucket
router.post('/', createBucketOne);

module.exports = router;