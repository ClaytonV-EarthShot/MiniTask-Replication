const Malnutrition = require('../../models/bucketOne/malnuitritionModel');
const mongoose = require('mongoose');

// get a single bucket item
const getMalnutrition = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  const malnutrition = await Malnutrition.findById(id);

  if (!malnutrition) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(malnutrition);
}

// create a new bucket item
const createMalnutrition = async (req, res) => {
  const {
    prevalence: [{
      ofUndernourishme,
      ofStunting,
      ofWasting,
      underweight,
      severeFoodInsecurity,
      microOrMacroDeficiency
    }],
    indices: [{
      globalHungerIndexScore
    }]
  } = req.body;

  try {
    const malnutrition = await Malnutrition.create({
      prevalence: [{
        ofUndernourishme,
        ofStunting,
        ofWasting,
        underweight,
        severeFoodInsecurity,
        microOrMacroDeficiency
      }],
      indices: [{
        globalHungerIndexScore
      }]
    });
    res.status(200).json(malnutrition);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getMalnutrition,
  createMalnutrition
}