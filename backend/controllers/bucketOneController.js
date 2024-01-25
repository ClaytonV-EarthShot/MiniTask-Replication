const BucketOne = require('../models/bucketOneModel');
const mongoose = require('mongoose');

// get all bucket items
const getBucketOnes = async (req, res) => {
  const bucketOnes = await BucketOne.find({}).sort({createdAt: -1})

  res.status(200).json(bucketOnes);
}

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
  const {
    caloricSupplyPerCapita,
    proteinSupplyPerCapita,
    supplyFromAnimalBasedFoods,
    supplyFromPlantBasedFoods,
    fatSupplyPerCapita,
    dietaryEnergySupplyAdequacy,
    minimumDietaryEnergyRequirement,
    retail,
    outOfHomeConsumption,
    household,
    agriculturalWaterWithdrawal,
    fertilizerUsePerUnitOfLand,
    cropLandPercent,
    agricultureFactorProductivity,
    agriculturalRAndD,
    rainfedMaize,
    rainfedRice,
    rainfedWheat,
    rainfedSorghum,
    rainfedMillet,
    rainfedBarley,
    irrigatedMaize,
    irrigatedRice,
    irrigatedWheat,
    irrigatedBarley,
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
    irrigatedSugarBeet,
    soilErosion,
    percentFoodWastedProductionToTable,
    productionAndProcessing,
    transportation,
    retailers,
    inHouse,
    costOfNutrientAdequacy,
    costOfCaloricAdequacy,
    premiumOfConaVsCoca,
    percentOfAverageIncomeCona,
    percentOfAverageIncomeCoca,
    foodPercentOfConsumerExpenditure,
    foodExpenditureInDollars,
    consumerExpenditureInDollars,
    averagePersonEatDescription,
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
    selenium,
    folate,
    carbohydrates,
    proteins,
    fats,
    prevalenceOfUndernourishment,
    prevalenceOfStunting,
    prevalenceOfWasting,
    underweight,
    severeFoodInsecurity,
    microAndMacroNutrientDeficiency,
    globalHungerIndexScore
  } = req.body;

  try {
    const bucketOne = await BucketOne.create({
    caloricSupplyPerCapita,
    proteinSupplyPerCapita,
    supplyFromAnimalBasedFoods,
    supplyFromPlantBasedFoods,
    fatSupplyPerCapita,
    dietaryEnergySupplyAdequacy,
    minimumDietaryEnergyRequirement,
    retail,
    outOfHomeConsumption,
    household,
    agriculturalWaterWithdrawal,
    fertilizerUsePerUnitOfLand,
    cropLandPercent,
    agricultureFactorProductivity,
    agriculturalRAndD,
    rainfedMaize,
    rainfedRice,
    rainfedWheat,
    rainfedSorghum,
    rainfedMillet,
    rainfedBarley,
    irrigatedMaize,
    irrigatedRice,
    irrigatedWheat,
    irrigatedBarley,
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
    irrigatedSugarBeet,
    soilErosion,
    percentFoodWastedProductionToTable,
    productionAndProcessing,
    transportation,
    retailers,
    inHouse,
    costOfNutrientAdequacy,
    costOfCaloricAdequacy,
    premiumOfConaVsCoca,
    percentOfAverageIncomeCona,
    percentOfAverageIncomeCoca,
    foodPercentOfConsumerExpenditure,
    foodExpenditureInDollars,
    consumerExpenditureInDollars,
    averagePersonEatDescription,
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
    selenium,
    folate,
    carbohydrates,
    proteins,
    fats,
    prevalenceOfUndernourishment,
    prevalenceOfStunting,
    prevalenceOfWasting,
    underweight,
    severeFoodInsecurity,
    microAndMacroNutrientDeficiency,
    globalHungerIndexScore
    });
    res.status(200).json(bucketOne);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// update a bucket
const updateBucketOne = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No bucket exists'});
  }

  const bucketOne = await BucketOne.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if(!bucketOne) {
    return res.status(400).json({error: 'No bucket exists'});
  };

  res.status(200).json(bucketOne);
}


module.exports = {
  getBucketOnes,
  getBucketOne,
  createBucketOne,
  updateBucketOne
}