/**
 * Created by Matthias on 19/08/2017.
 */
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

router.get('/getguitars', function(req, res) {
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('guitars');
        collection.find({}).toArray(function (err, results) {
            res.send(results);
        });
    });
});

router.get('/getguitarbyid/:id', function(req, res) {
    var id = new objectId(req.params.id);
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('guitars');
        collection.findOne({_id: id}, function (err, results) {
            res.send(results);
        });
    });
});

router.post('/getguitarbytype:type', function(req, res) {
    var type = req.params.type;
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('guitars');
        collection.findOne({type: type}, function (err, results) {
            res.send(results);
        });
    });
});

router.post('/getguitarbybrand:brand', function(req, res) {
    var brand = req.params.brand;
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('guitars');
        collection.findOne({brand: brand}, function (err, results) {
            res.send(results);
        });
    });
});

router.post('/addguitar', function(req, res) {
    var url = 'mongodb://localhost:27017/myWebApp';
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('guitars');
        collection.insert(req.body, function (err, results) {
            res.send(results);
            db.close();
        })
    });
});

module.exports = router;