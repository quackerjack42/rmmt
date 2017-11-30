var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/:userId', function (req, res) {
    User.findOne({userId: req.params.userId}, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            console.log("User: User details of " + user.name + " was sent.");
        }
        res.send(user);
    })
});

router.post('/', function (req, res) {
    User(req.body).save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Users: Added User, name = " + req.body.name);
        }
        res.send();
    });
});

router.put('/:userId', function (req, res) {
    User.update({userId: req.params.userId}, {$set: req.body}, function () {
        console.log("User: User Updated");
        res.send();
    });
});

router.delete('/:userId', function (req, res) {
    User.find({userId: req.params.userId}).remove(function () {
        console.log("Users: User Deleted, id = " + req.params.id);
        res.send();
    });
});

module.exports = router;
