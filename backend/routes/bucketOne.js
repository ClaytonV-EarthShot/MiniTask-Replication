const express = require('express');
const {
  getBucketOnes,
  getBucketOne,
  createBucketOne,
  updateBucketOne
} = require('../controllers/bucketOneController');

const router = express.Router();

// GET all buckets
router.get('/', getBucketOnes);

// GET a single bucket
router.get('/:id', getBucketOne);

// POST a new bucket
router.post('/', createBucketOne);

// UPDATE a bucket
router.post('/:id', updateBucketOne);

module.exports = router;