var express = require('express');
var router = express.Router();
var developer = require('../controller/developer');

router.get('/', function (req, res, next) {
  res.send('Api DEVELOPER model');
});


// ADD New 
router.post('/add', developer.create);

// Get all
router.get('/list', developer.list);

// Get by name
router.get('/name/:name', developer.findByName);

// Get by name
router.get('/id/:_id', developer.findById);

// Update
router.put('/updatebyid', developer.updateById);

// Update by filter
router.put('/update', developer.update);

// Delete by filter
router.delete('/delete', developer.delete);

module.exports = router;
