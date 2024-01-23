const FoodVsConsumption = require('../../models/bucketOne/foodVsConsumptionModel');
const mongoose = require('mongoose');

// get a single bucket item
const getFoodVsConsumption = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  const foodVsConsumption = await FoodVsConsumption.findById(id);

  if (!foodVsConsumption) {
    return res.status(404).json({error: 'Bucket item does not exist'});
  }

  res.status(200).json(foodVsConsumption);
}

// create a new bucket item
const createFoodVsConsumption = async (req, res) => {
  const {
    supply: [{
      caloricSupply,
      proteinSupply,
      animalBasedFood,
      fatSupply,
      dietaryEnergy,
      minimumDietaryEnergy
    }],
    foodWaste: [{
      retail,
      outOfHomeConsumption,
      household
    }]
  } = req.body;

  try {
    const foodVsConsumption = await FoodVsConsumption.create({
      supply: [{
        caloricSupply,
        proteinSupply,
        animalBasedFood,
        fatSupply,
        dietaryEnergy,
        minimumDietaryEnergy
      }],
      foodWaste: [{
        retail,
        outOfHomeConsumption,
        household
      }]
    });
    res.status(200).json(foodVsConsumption);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = {
  getFoodVsConsumption,
  createFoodVsConsumption
}