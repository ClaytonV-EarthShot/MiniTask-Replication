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
    type: String,
  }
});

module.exports = mongoose.model('City', citySchema);