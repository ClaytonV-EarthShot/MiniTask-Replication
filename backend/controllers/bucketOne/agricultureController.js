const Agriculture = require('../../models/bucketOne/agricultureModel');
const mongoose = require('mongoose');

// get a single bucket item
const getAgriculture = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  const agriculture = await Agriculture.findById(id);

  if (!agriculture) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(agriculture);
}

// create a new bucket item
const createAgriculture = async (req, res) => {
  const {
    sectionOne: [{
      waterWithdrawl,
      fertPerUnitLand,
      cropLandPercentage
    }],
    productivity: [{
      agricultureFactorProductivity,
      agricultureRnD,
      rainfedMaize,
      rainfedRice,
      rainfedWheat,
      rainfedSorghum,
      rainfedMillet,
      rainfedBarley,
      irrigatedMaize,
      irrigatedRice,
      irrigatedWheat,
      irrigateBarley,
      rainfedSoybean,
      rainfedCommonBean,
      rainfedFabaBean,
      rainfedPea,
      rainfedChickpea,
      rainfedCowpea,
      rainfedPigeonpea,
      rainfedGroundnut,
      irrigatedSoybean,
      irrigatedCommonBean,
      irrigatedPea,
      rainfedPotato,
      rainfedSugarcane,
      rainfedRapeseed,
      rainfedOilPalm,
      irrigatedRapeseed,
      irrigatedCotton,
      irrigatedPotato,
      irrigatedSugarcane,
      irrigatedSugarBeet
    }],
    biophysicalFactors: [{
      soilErosion
    }]
  } = req.body;

  try {
    const agriculture = await Agriculture.create({
      sectionOne: [{
        waterWithdrawl,
        fertPerUnitLand,
        cropLandPercentage
      }],
      productivity: [{
        agricultureFactorProductivity,
        agricultureRnD,
        rainfedMaize,
        rainfedRice,
        rainfedWheat,
        rainfedSorghum,
        rainfedMillet,
        rainfedBarley,
        irrigatedMaize,
        irrigatedRice,
        irrigatedWheat,
        irrigateBarley,
        rainfedSoybean,
        rainfedCommonBean,
        rainfedFabaBean,
        rainfedPea,
        rainfedChickpea,
        rainfedCowpea,
        rainfedPigeonpea,
        rainfedGroundnut,
        irrigatedSoybean,
        irrigatedCommonBean,
        irrigatedPea,
        rainfedPotato,
        rainfedSugarcane,
        rainfedRapeseed,
        rainfedOilPalm,
        irrigatedRapeseed,
        irrigatedCotton,
        irrigatedPotato,
        irrigatedSugarcane,
        irrigatedSugarBeet
      }],
      biophysicalFactors: [{
        soilErosion
      }]
    });
    res.status(200).json(agriculture);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getAgriculture,
  createAgriculture
}