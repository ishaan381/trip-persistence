var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');
var Promise = require('bluebird');

router.get('/api/hotels', function (req, res, next) {

  console.log('getting hotels');


    Hotel.findAll({
        include: [Place]
    }).then(function(hotels) {
      console.log(hotels);
      res.send(hotels)
    })
    .catch(next);

});

router.get('/api/restaurants', function (req, res, next) {

  console.log('getting restaurants');


    Restaurant.findAll({
        include: [Place]
    }).then(function(restaurants) {
      console.log(restaurants);
      res.send(restaurants)
    })
    .catch(next);

});

router.get('/api/activities', function (req, res, next) {

  console.log('getting activities');


    Activity.findAll({
        include: [Place]
    }).then(function(activities) {
      console.log(activities);
      res.send(activities)
    })
    .catch(next);

});

module.exports = router;
