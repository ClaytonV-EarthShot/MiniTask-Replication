const LifeAsWeKnow = require('../../models/bucketOne/lifeAsWeKnowModel');
const mongoose = require('mongoose');

// get a single bucket item
const getLifeAsWeKnow = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  const lifeAsWeKnow = await LifeAsWeKnow.findById(id);

  if (!lifeAsWeKnow) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(lifeAsWeKnow);
}

// create a new bucket item
const createLifeAsWeKnow = async (req, res) => {
  const {
    consumerExpenditurePercent,
    foodExpenditureInDollar,
    consumerExpenditureInDollar,
    averagePersonDiet
  } = req.body;

  try {
    const lifeAsWeKnow = await LifeAsWeKnow.create({
      consumerExpenditurePercent,
      foodExpenditureInDollar,
      consumerExpenditureInDollar,
      averagePersonDiet
    });
    res.status(200).json(lifeAsWeKnow);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getLifeAsWeKnow,
  createLifeAsWeKnow
}