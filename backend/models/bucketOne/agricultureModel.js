const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agricultureSchema = new Schema({
  sectionOne: [{
    waterWithdrawl: {
      type: Number
    },
    fertPerUnitLand: {
      type: Number
    },
    cropLandPercentage: {
      type: Number
    }
  }],
  productivity: [{
    agricultureFactorProductivity: {
      type: Number
    },
    agricultureRnD: {
      type: Number
    },
    rainfedMaize: {
      type: Number
    },
    rainfedRice: {
      type: Number
    },
    rainfedWheat: {
      type: Number
    },
    rainfedSorghum: {
      type: Number
    },
    rainfedMillet: {
      type: Number
    },
    rainfedBarley: {
      type: Number
    },
    irrigatedMaize: {
      type: Number
    },
    irrigatedRice: {
      type: Number
    },
    irrigatedWheat: {
      type: Number
    },
    irrigateBarley: {
      type: Number
    },
    rainfedSoybean: {
      type: Number
    },
    rainfedCommonBean: {
      type: Number
    },
    rainfedFabaBean: {
      type: Number
    },
    rainfedPea: {
      type: Number
    },
    rainfedChickpea: {
      type: Number
    },
    rainfedCowpea: {
      type: Number
    },
    rainfedPigeonpea: {
      type: Number
    },
    rainfedGroundnut: {
      type: Number
    },
    irrigatedSoybean: {
      type: Number
    },
    irrigatedCommonBean: {
      type: Number
    },
    irrigatedPea: {
      type: Number
    },
    rainfedPotato: {
      type: Number
    },
    rainfedSugarcane: {
      type: Number
    },
    rainfedRapeseed: {
      type: Number
    },
    rainfedOilPalm: {
      type: Number
    },
    irrigatedRapeseed: {
      type: Number
    },
    irrigatedCotton: {
      type: Number
    },
    irrigatedPotato: {
      type: Number
    },
    irrigatedSugarcane: {
      type: Number
    },
    irrigatedSugarBeet: {
      type: Number
    }
  }],
  biophysicalFactors: [{
    soilErosion: {
      type: Number
    }
  }]
});

module.exports = mongoose.model('Agriculture', agricultureSchema);