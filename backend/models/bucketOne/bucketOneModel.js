const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bucketOneSchema = new Schema({
  foodVsConsumption: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodVsConsumption',
    required: true
  },
  agriculture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agriculture',
    required: true
  },
  distribution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Distribution',
    required: true
  },
  economic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Economic',
    required: true
  },
  lifeAsWeKnow: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LifeAsWeKnow',
    required: true
  },
  malnutrition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Malnutrition',
    required: true
  },
  nutrientDeficiency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NutrientDeficiency',
    required: true
  }
});

module.exports = mongoose.model('BucketOne', bucketOneSchema);