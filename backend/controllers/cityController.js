const City = require('../models/cityModel');
const mongoose = require('mongoose');

// get all cities
const getCities = async (req, res) => {
  const cities = await City.find({}).sort({createdAt: -1})

  res.status(200).json(cities);
}

// get a single city
const getCity = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'City does not exist'});
  }

  const city = await City.findById(id);

  if (!city) {
    return res.status(404).json({error: 'City does not exist'});
  }

  res.status(200).json(city);
}

// create new city
const createCity = async (req, res) => {
  const {name, population, size, imageLinkName} = req.body;

  try {
    const city = await City.create({name, population, size, imageLinkName});
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a city
const deleteCity = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'City does not exist'});
  }

  const city = await City.findOneAndDelete({_id: id});

  if (!city) {
    return res.status(400).json({error: 'City does not exist'});
  }

  res.status(200).json(city);
}

// update a city
const updateCity = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'City does not exist'});
  }

  const city = await City.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!city) {
    return res.status(400).json({error: 'City does not exist'});
  };

  res.status(200).json;
}

module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity
}