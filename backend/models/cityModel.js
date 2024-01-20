const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  population: {
    type: Number,
  },
  size: {
    type: Number,
  },
  homelessPopulation: {
    type: Number
  },
  homelessPopulationIncrease: {
    type: Number
  },
  co2emission: {
    type: String
  },
  imageLinkName: {
    type: String,
    required: true
  },
  mapLink: {
    type: String
  }
});

module.exports = mongoose.model('City', citySchema);