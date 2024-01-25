const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bucketOneSchema = new Schema({
  caloricSupplyPerCapita: {
    type: String
  },
  proteinSupplyPerCapita: {
    type: String
  },
  supplyFromAnimalBasedFoods: {
    type: String
  },
  supplyFromPlantBasedFoods: {
    type: String
  },
  fatSupplyPerCapita: {
    type: String
  },
  dietaryEnergySupplyAdequacy: {
    type: String
  },
  minimumDietaryEnergyRequirement: {
    type: String
  },
  retail: {
    type: String
  },
  outOfHomeConsumption: {
    type: String
  },
  household: {
    type: String
  },
  agriculturalWaterWithdrawal: {
    type: String
  },
  fertilizerUsePerUnitOfLand: {
    type: String
  },
  cropLandPercent: {
    type: String
  },
  agricultureFactorProductivity: {
    type: String
  },
  agriculturalRAndD: {
    type: String
  },
  rainfedMaize: {
    type: String
  },
  rainfedRice: {
    type: String
  },
  rainfedWheat: {
    type: String
  },
  rainfedSorghum: {
    type: String
  },
  rainfedMillet: {
    type: String
  },
  rainfedBarley: {
    type: String
  },
  irrigatedMaize: {
    type: String
  },
  irrigatedRice: {
    type: String
  },
  irrigatedWheat: {
    type: String
  },
  irrigatedBarley: {
    type: String
  },
  rainfedSoybean: {
    type: String
  },
  rainfedCommonBean: {
    type: String
  },
  rainfedFabaBean: {
    type: String
  },
  rainfedPea: {
    type: String
  },
  rainfedChickpea: {
    type: String
  },
  rainfedCowpea: {
    type: String
  },
  rainfedPigeonpea: {
    type: String
  },
  rainfedGroundnut: {
    type: String
  },
  irrigatedSoybean: {
    type: String
  },
  irrigatedCommonBean: {
    type: String
  },
  irrigatedPea: {
    type: String
  },
  rainfedPotato: {
    type: String
  },
  rainfedSugarcane: {
    type: String
  },
  rainfedRapeseed: {
    type: String
  },
  rainfedOilPalm: {
    type: String
  },
  irrigatedRapeseed: {
    type: String
  },
  irrigatedCotton: {
    type: String
  },
  irrigatedPotato: {
    type: String
  },
  irrigatedSugarcane: {
    type: String
  },
  irrigatedSugarBeet: {
    type: String
  },
  soilErosion: {
    type: String
  },
  percentFoodWastedProductionToTable: {
    type: String
  },
  productionAndProcessing: {
    type: String
  },
  transportation: {
    type: String
  },
  retailers: {
    type: String
  },
  inHouse: {
    type: String
  },
  costOfNutrientAdequacy: {
    type: String
  },
  costOfCaloricAdequacy: {
    type: String
  },
  premiumOfConaVsCoca: {
    type: String
  },
  percentOfAverageIncomeCona: {
    type: String
  },
  percentOfAverageIncomeCoca: {
    type: String
  },
  foodPercentOfConsumerExpenditure: {
    type: String
  },
  foodExpenditureInDollars: {
    type: String
  },
  consumerExpenditureInDollars: {
    type: String
  },
  averagePersonEatDescription: {
    type: String
  },
  vitaminA: {
    type: String
  },
  vitaminB: {
    type: String
  },
  vitaminC: {
    type: String
  },
  vitaminD: {
    type: String
  },
  vitaminE: {
    type: String
  },
  vitaminK: {
    type: String
  },
  iron: {
    type: String
  },
  calcium: {
    type: String
  },
  magnesium: {
    type: String
  },
  zinc: {
    type: String
  },
  iodine: {
    type: String
  },
  selenium: {
    type: String
  },
  folate: {
    type: String
  },
  carbohydrates: {
    type: String
  },
  proteins: {
    type: String
  },
  fats: {
    type: String
  },
  prevalenceOfUndernourishment: {
    type: String
  },
  prevalenceOfStunting: {
    type: String
  },
  prevalenceOfWasting: {
    type: String
  },
  underweight: {
    type: String
  },
  severeFoodInsecurity: {
    type: String
  },
  microAndMacroNutrientDeficiency: {
    type: String
  },
  globalHungerIndexScore: {
    type: String
  }
  });

module.exports = mongoose.model('BucketOne', bucketOneSchema);