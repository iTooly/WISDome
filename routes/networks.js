/**
 * Created by iTooly on 3/31/2016.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if(req.user) {
        res.render('networks', { title: 'Networks', user: req.user, networks: [{name: "Home", type: "home"}, {name: "RAMBA\"M", type: "hospital"}, {name: "King David", type: "hotel"}] });
    } else {
        res.redirect('/connect');
    }
});

module.exports = router;