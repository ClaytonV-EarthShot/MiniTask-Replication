const NutrientDeficiency = require('../../models/bucketOne/nutrientDeficiencyModel');
const mongoose = require('mongoose');

// get a single bucket item
const getNutrientDeficiency = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  const nutrientDeficiency = await NutrientDeficiency.findById(id);

  if (!nutrientDeficiency) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(nutrientDeficiency);
}

// create a new bucket item
const createNutrientDeficiency = async (req, res) => {
  const {
    micro: [{
      vitaminA,
      vitaminB,
      vitaminC,
      vitaminD,
      vitaminE,
      vitaminK,
      iron,
      calcium,
      magnesium,
      zinc,
      iodine,
      folate
    }],
    macro: [{ 
      carbohydrates,
      proteins,
      fats
    }]
  } = req.body;

  try {
    const nutrientDeficiency = await NutrientDeficiency.create({
      micro: [{
        vitaminA,
        vitaminB,
        vitaminC,
        vitaminD,
        vitaminE,
        vitaminK,
        iron,
        calcium,
        magnesium,
        zinc,
        iodine,
        folate
      }],
      macro: [{ 
        carbohydrates,
        proteins,
        fats
      }]
    });
    res.status(200).json(nutrientDeficiency);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getNutrientDeficiency,
  createNutrientDeficiency
}