var express = require('express');
var router = express.Router();

/* GET API Test. */
router.get('/', function(req, res, next) {
    res.send('OK');
});

module.exports = router;
