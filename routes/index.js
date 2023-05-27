var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello',function(req,res,next){
    res.send('Hello World');
});

router.post('/bye',function(req,res,next){
  let message = req.body.message;
    res.send('Bye World' + message);
});

module.exports = router;
