const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lifeAsWeKnowSchema = new Schema({
  consumerExpenditurePercent: {
    type: Number
  },
  foodExpenditureInDollar: {
    type: Number
  },
  consumerExpenditureInDollar: {
    type: Number
  },
  averagePersonDiet: {
    type: String
  }
});

module.exports = mongoose.model('LifeAsWeKnow', lifeAsWeKnowSchema);