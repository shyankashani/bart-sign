var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var parse = require('xml2js-es6-promise');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/stations', function (req, res) {
  axios.get('http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V')
  .then(result => { return parse(result.data) })
  .then(result => { res.send(result.root.stations[0].station) })
});

app.get('/route', function (req, res) {
  axios.get('http://api.bart.gov/api/route.aspx?cmd=routeinfo&route=6&key=MW9S-E7SL-26DU-VV8V')
  .then(result => { return parse(result.data) })
  .then(result => { res.send(result.root.routes[0].route[0]) })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
