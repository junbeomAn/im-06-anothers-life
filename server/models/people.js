const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Person = new Schema({
  name: String,
  description: String,
  img_one: String,
  img_two: String,
  schedule: [{ time: String, task: String }],
});

module.exports = mongoose.model('Person', Person);