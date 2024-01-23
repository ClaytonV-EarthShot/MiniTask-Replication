const BucketOne = require('../../models/bucketOne/bucketOneModel');
const mongoose = require('mongoose');

// get a single bucket item
const getBucketOne = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket does not exist'});
  }

  const bucketOne = await BucketOne.findById(id);

  if (!bucketOne) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(bucketOne);
}

// create a new bucket
const createBucketOne = async (req, res) => {
  const {foodVsConsumption, agriculture, distribution} = req.body;

  try {
    const bucketOne = await BucketOne.create({foodVsConsumption, agriculture, distribution});
    res.status(200).json(bucketOne);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = {
  getBucketOne,
  createBucketOne
}