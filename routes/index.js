var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(req.body);
});
router.post('/',function(req,res){
    console.log(req.body);      // your JSON
});

module.exports = router;
