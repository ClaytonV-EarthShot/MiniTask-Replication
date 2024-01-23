const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const malnutritionSchema = new Schema({
  prevalence: [{
    ofUndernourishment: {
      type: Number
    },
    ofStunting: {
      type: Number
    },
    ofWasting: {
      type: Number
    },
    underweight: {
      type: Number
    },
    severeFoodInsecurity: {
      type: Number
    },
    microOrMacroDeficiency: {
      type: Number
    }
  }],
  indices: [{
    globalHungerIndexScore: {
      type: Number
    }
  }]
});

module.exports = mongoose.model('Malnutrition', malnutritionSchema);