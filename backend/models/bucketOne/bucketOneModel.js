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
  }
});

module.exports = mongoose.model('BucketOne', bucketOneSchema);