var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {
    console.log("receive request");
    res.send('OK');
});

module.exports = router;
