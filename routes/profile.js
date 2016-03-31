/**
 * Created by iTooly on 3/31/2016.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if(req.user){
        res.render('profile', {data: { title: 'Profile', user: req.user }});
    } else {
        res.redirect('../connect');
    }
});

module.exports = router;