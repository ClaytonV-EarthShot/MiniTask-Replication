const Economic = require('../../models/bucketOne/economicModel');
const mongoose = require('mongoose');

// get a single bucket item
const getEconomic = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  const economic = await Economic.findById(id);

  if (!economic) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(economic);
}

// create a new bucket item
const createEconomic = async (req, res) => {
  const {
    CoNA,
    CoCA,
    premiumOfCoCaCoNa,
    percentAverageIncomeCoNA,
    percentAverageIncomeCoCA
  } = req.body;

  try {
    const economic = await Economic.create({
      CoNA,
      CoCA,
      premiumOfCoCaCoNa,
      percentAverageIncomeCoNA,
      percentAverageIncomeCoCA
    });
    res.status(200).json(economic);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getEconomic,
  createEconomic
}