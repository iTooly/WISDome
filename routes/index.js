var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('dashboard');
});

router.get('/connect', function (req, res, next) {
  res.render('connect', {data: { title: 'Connect' }});
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard', user: req.user });
});

router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Settings', user: req.user });
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;
