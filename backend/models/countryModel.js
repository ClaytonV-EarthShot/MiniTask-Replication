const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  country: {
    type: String,
    required: true
  },
  incomeClassification: {
    type: String
  },
  region: {
    type: String
  },
  population: {
    type: Number
  },
  gniAtlas: {
    type: Number
  },
  gniPPP: {
    type: Number
  },
  LDC: {
    type: String
  },
  populationUrban: {
    type: String
  },
  populationRural: {
    type: String
  },
  electricityAccessUrban: {
    type: String
  },
  electricityAccessRural: {
    type: String
  },
  internetConnectivityUrban: {
    type: String
  },
  internetConnectivityRural: {
    type: String
  }
});

module.exports = mongoose.model('Country', countrySchema);