var mongoose = require('mongoose');

// Seyup the URL
var URL = process.env.URL || 'mongodb://localhost/Database';

mongoose.set('useCreateIndex', true);

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// Connection
mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

//Models
require('../model/developer');

var db = mongoose.connection;

//Enebled the Listener
db.on('error', () => {
  console.error('Error occured in db connection');
});

db.on('open', () => {
  console.log('DB Connection established successfully');
});
