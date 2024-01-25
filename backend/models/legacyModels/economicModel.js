const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const economicSchema = new Schema({
  CoNA: {
    type: Number
  },
  CoCA: {
    type: Number
  },
  premiumOfCoCaCoNa: {
    type: Number
  },
  percentAverageIncomeCoNA: {
    type: Number
  },
  percentAverageIncomeCoCA: {
    type: Number
  }
});

module.exports = mongoose.model('Economic', economicSchema);