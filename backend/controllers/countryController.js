const Country = require('../models/countryModel');
const mongoose = require('mongoose');

// get all countries
const getCountries = async (req, res) => {
  const countries = await Country.find({}).sort({createdAt: -1})

  res.status(200).json(countries);
}

// get a single country
const getCountry = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Country does not exist'});
  }

  const country = await Country.findById(id);

  if (!country) {
    return res.status(404).json({error: 'Country does not exist'});
  }

  res.status(200).json(country);
}

// create new country
const createCountry = async (req, res) => {
  const {
    country,
    incomeClassification,
    region,
    population,
    gniAtlas,
    gniPPP,
    LDC,
    populationUrban,
    populationRural,
    electricityAccessUrban,
    electricityAccessRural,
    internetConnectivityUrban,
    internetConnectivityRural
  } = req.body;

  try {
    const countryDoc = await Country.create({
      country,
      incomeClassification,
      region,
      population,
      gniAtlas,
      gniPPP,
      LDC,
      populationUrban,
      populationRural,
      electricityAccessUrban,
      electricityAccessRural,
      internetConnectivityUrban,
      internetConnectivityRural
    });
    res.status(200).json(countryDoc);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a country
const deleteCountry = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Country does not exist'});
  }

  const country = await Country.findOneAndDelete({_id: id});

  if (!country) {
    return res.status(400).json({error: 'Country does not exist'});
  }

  res.status(200).json(country);
}

// update a country
const updateCountry = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Country does not exist'});
  }

  const country = await Country.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!country) {
    return res.status(400).json({error: 'Country does not exist'});
  };

  res.status(200).json;
}

module.exports = {
  createCountry,
  getCountries,
  getCountry,
  deleteCountry,
  updateCountry
}