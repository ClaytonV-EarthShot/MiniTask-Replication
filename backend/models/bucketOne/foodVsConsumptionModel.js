const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodVsConsumptionSchema = new Schema({
  supply: [{
    caloricSupply: {
      type: Number
    },
    proteinSupply: {
      type: Number
    },
    animalBasedFood: {
      type: Number
    },
    plantBasedFood: {
      type: Number
    },
    fatSupply: {
      type: Number
    },
    dietaryEnergy: {
      type: Number
    },
    minimumDietaryEnergy: {
      type: Number
    }
  }],
  foodWaste: [{
    retail: {
      type: Number
    },
    outOfHomeConsumption: {
      type: Number
    },
    household: {
      type: Number
    }
  }]
});

module.exports = mongoose.model('FoodVsConsumption', foodVsConsumptionSchema);