(function () {
  var mongoose = require('mongoose');
  var developer = mongoose.model('Developer');


  // List All
  exports.listDevelopers = function (callback) {
    developer.find(callback)
  }

  // Find by filter
  exports.findDeveloper = function (query, callback) {
    developer.findOne(query, callback);
  }

  // ADD New
  exports.createDeveloper = function (data, callback) {
    developer.create(data).then((response) => {
      callback(null, response);
    }, (error) => {
      callback(error, null);
    });
  };

  // Find by ID
  exports.findDeveloperById = function (id, callback) {
    developer.findById({
      _id: id
    }, (err, response) => {
      callback(err, response);
    });
  }

  // Update By ID
  exports.updateDeveloperById = function (id, data, callback) {
    developer.findByIdAndUpdate({
      _id: id
    }, data, (err, response) => {
      callback(err, response);
    });
  }

  // Update
  exports.updateDeveloper = function (query, data, options, callback) {
    developer.findOneAndUpdate(query, data, options, (err, response) => {
      callback(err, response);
    });
  }

  // Delete
  exports.deleteDeveloper = function (query, callback) {
    developer.deleteOne(query, callback);
  }

})()
