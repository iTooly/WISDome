/**
 * Created by iTooly on 3/30/2016.
 */

var express = require('express');
var router = express.Router();
var Gun = require('../models/gun');

router.get('/', function(req, res, next) {
    console.log(req.user);
    var guns = ["2342l3k423e2d", "23r23f23f23f2", "23d23f2g2q3gv", "23v23ved2v5v456v4b65", "3b5rerber5ejna5", "Add"];
    if(req.user){
        fetchByOwner(req.user._id, res, req);
    } else {
        res.redirect('/connect');
    }
});

router.get('/new', function(req, res, next) {
    if(req.user){
        res.render('new_weapon', {data: { title: 'New Weapon', user: req.user}});
    } else {
        res.redirect('/connect');
    }
});

router.post('/new', function(req, res, next) {
    console.log(req.body);
    var gun = new Gun({
        owner : req.user._id,
        name : req.body.name,
        type : req.body.type
    });

    gun.save(function (err, gun) {
        if(err)
            res.redirect('/connect');

        res.redirect('/');
    });
});

function fetchByOwner(id, res, req) {
    Gun.find({owner: id}, function (err, guns) {
        if(err)
            return [];

        res.render('weapons', {data: { title: 'Weapons', user: req.user, guns: guns }});
    });
}

module.exports = router;