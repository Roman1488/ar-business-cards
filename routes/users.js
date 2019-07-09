var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(req.body);
});
router.post('/',function(req,res){
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body);
});

module.exports = router;
