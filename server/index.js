var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var parse = require('xml2js-es6-promise');
var api = 'http://api.bart.gov/api/';
var key = '&key=MW9S-E7SL-26DU-VV8V';

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/stations', function(req, res) {
  axios.get(api + 'stn.aspx?cmd=stns' + key)
  .then(result => { return parse(result.data) })
  .then(result => {
    let stations = result.root.stations[0].station;
    res.send(stations);
  })
});

app.get('/stationInfo', function(req, res) {
  let orig = req.query.station;
  axios.get(api + 'stn.aspx?cmd=stninfo&orig=' + orig + key)
  .then(result => { return parse(result.data) })
  .then(result => {
    let stationInfo = result.root.stations[0].station[0];
    res.send(stationInfo)
  })
});

app.get('/route', function(req, res) {
  axios.get(api + 'route.aspx?cmd=routeinfo&route=6' + key)
  .then(result => { return parse(result.data) })
  .then(result => {
    let route = result.root.routes[0].route[0];
    res.send(route);
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
