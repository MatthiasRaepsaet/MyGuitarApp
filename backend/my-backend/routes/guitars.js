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

router.post('/addmanyguitars', function(req, res) {
    var url = 'mongodb://localhost:27017/myWebApp';
    var guitars = [{ "name": "RGX7 Iron Label Surreal Blue Burst",
        "type": "Superstrat",
        "brand": "Ibanez",
        "price": "900 euro",
        "strings": 7,
        "description": "",
        "photoUrl": "https://static.bax-shop.nl/image/product/236541/532431/fd02d0b4/450x450/1453733453Ibanez_RGDIX7MPB_Iron_Label_Surreal_Blue_Burst.jpg"},
        { "name": "Eclipse standard II",
            "type": "Lespaul",
            "brand": "ESP",
            "price": "1600 euro",
            "strings": 6,
            "description": "",
            "photoUrl": "https://static.bax-shop.nl/image/product/250011/853411/4285aacf/450x450/1480682453ESP%20E-II%20Eclipse%20DB%20Vintage%20Black%20elektrische%20gitaar%20met%20koffer%20front.jpg"},
        { "name": "Fender Jimi Hendrix Stratocaster MN Olympic White",
            "type": "Stratocaster",
            "brand": "Fender",
            "price": "850 euro",
            "strings": 6,
            "description": "",
            "photoUrl": "https://static.bax-shop.nl/image/product/212197/584795/e022764e/450x450/1457949312Fender-jimi-hendrix-stratocaster-mn-olympic-white-front.jpg"},
        { "name": "Gibson Les Paul Deluxe Cherry Sunburst 1972",
            "type": "Lespaul",
            "brand": "Gibson",
            "price": "2400 euro",
            "strings": 6,
            "description": "",
            "photoUrl": "https://static.bax-shop.nl/image/product/220512/482448/c73fed45/450x450/1447165737INR_GIB_CHERRY_BURST_FRONT.jpg"},
    ]
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('guitars');
        collection.insert(guitars, function (err, results) {
            res.send(results);
            db.close();
        })
    });
});

module.exports = router;