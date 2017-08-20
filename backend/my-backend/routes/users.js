var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var user;

router.post('/login', function(req, res) {
    var loginDto = req.body;
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('users');
        collection.findOne({username: loginDto.username, password: loginDto.password}, function (err, results) {
            if(results !== null){
                res.send(results);
            } else {
                res.send({"username": null, "password": null});
            }
            db.close();
        });
    });
});



router.get('/getusers', function(req, res) {
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('users');
        collection.find({}).toArray(function (err, results) {
            res.send(results);
        });
    });
});

router.get('/getuserbyid/:id', function(req, res) {
    var id = new objectId(req.params.id);
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('users');
        collection.findOne({_id: id}, function (err, results) {
            res.send(results);
        });
    });
});

router.post('/adduser', function(req, res) {
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('users');
        collection.insert(req.body, function (err, results) {
            res.send(results);
            db.close();
        })
    });
});

router.post('/addguitartocollection/:id', function(req, res) {
    var url = 'mongodb://localhost:27017/myWebApp';
    var id = new objectId(req.params.id);
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('users');
        collection.findOne({_id: id}, function (err, results) {
            var user = results;
            user.guitars.push(req.body);
            collection.save({_id: user._id, firstName: user.firstName,
                lastName: user.lastName, email: user.email, username: user.username,
                password: user.password, guitars: user.guitars}, function (err, results, user) {
                res.send(results);
                db.close();
            });
        });
    });
});

module.exports = router;
