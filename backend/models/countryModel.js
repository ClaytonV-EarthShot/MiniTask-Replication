const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bucketOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BucketOne'
  },
  population: {
    type: Number
  },
  region: {
    type: String
  },
  gniAtlas: {
    type: Number
  },
  gniPPP: {
    type: Number
  },
  LDC: {
    type: Boolean
  }
});

module.exports = mongoose.model('Country', countrySchema);