var express = require('express');
var router = express.Router();

// users listings 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
