var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  avatar: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  formacao: {
    type: String,
    default: ''
  },
  technologies: {
    type: String,
    default: ''
  },
  dob: Date,
});

var developer = new mongoose.model('Developer', schema);

module.exports = developer;
