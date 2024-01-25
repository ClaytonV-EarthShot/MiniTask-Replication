const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const distributionSchema = new Schema({
  foodWasteTotal: [{
    foodWastedFromProduction: {
      type: Number
    }
  }],
  foodWasteDueToSpoil: [{
    productionAndProcess: {
      type: Number
    },
    transportation: {
      type: Number
    },
    retailers: {
      type: Number
    },
    inHouse: {
      type: Number
    },
  }]
});

module.exports = mongoose.model('Distribution', distributionSchema);