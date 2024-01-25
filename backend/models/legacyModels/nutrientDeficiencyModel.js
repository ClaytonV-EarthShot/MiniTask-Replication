const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nutrientDeficiencySchema = new Schema({
  micro: [{
    vitaminA: {
      type: Number
    },
    vitaminB: {
      type: Number
    },
    vitaminC: {
      type: Number
    },
    vitaminD: {
      type: Number
    },
    vitaminE: {
      type: Number
    },
    vitaminK: {
      type: Number
    },
    iron: {
      type: Number
    },
    calcium: {
      type: Number
    },
    magnesium: {
      type: Number
    },
    zinc: {
      type: Number
    },
    iodine: {
      type: Number
    },
    folate: {
      type: Number
    }
  }],
  macro: [{ 
    carbohydrates: {
      type: Number
    },
    proteins: {
      type: Number
    },
    fats: {
      type: Number
    }
  }]
});

module.exports = mongoose.model('NutrientDeficiency', nutrientDeficiencySchema);