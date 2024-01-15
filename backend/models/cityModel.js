const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  population: {
    type: Number,
  },
  size: {
    type: Number,
  },
  imageLinkName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('City', citySchema);