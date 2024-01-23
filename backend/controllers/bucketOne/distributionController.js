const Distribution = require('../../models/bucketOne/distributionModel');
const mongoose = require('mongoose');

// get a single bucket item
const getDistribution = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  const distribution = await Distribution.findById(id);

  if (!distribution) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(distribution);
}

// create a new bucket item
const createDistribution = async (req, res) => {
  const {
    foodWasteTotal: [{
      foodWastedFromProduction
    }],
    foodWasteDueToSpoil: [{
      productionAndProcess,
      transportation,
      retailers,
      inHouse,
    }]
  } = req.body;

  try {
    const distribution = await Distribution.create({
      foodWasteTotal: [{
        foodWastedFromProduction
      }],
      foodWasteDueToSpoil: [{
        productionAndProcess,
        transportation,
        retailers,
        inHouse,
      }]
    });
    res.status(200).json(distribution);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getDistribution,
  createDistribution
}