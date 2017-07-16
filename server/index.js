var express = require('express');
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

app.get('/platforms', function(req, res) {
  let orig = req.query.station;
  axios.get(api + 'stn.aspx?cmd=stninfo&orig=' + orig + key)
  .then(result => { return parse(result.data) })
  .then(result => {

    let nr = result.root.stations[0].station[0].north_routes[0].route;
    let northRoutes = nr.map(route => { return route.split(' ').pop() });

    let np = result.root.stations[0].station[0].north_platforms[0].platform;
    let northPlatforms = np.map(platform => {
      return {
        abbr: platform + 'N',
        name: platform + ' Northbound',
        direction: 'N',
        routes: northRoutes
      }
    });

    let sr = result.root.stations[0].station[0].south_routes[0].route;
    let southRoutes = sr.map(route => { return route.split(' ').pop() });

    let sp = result.root.stations[0].station[0].south_platforms[0].platform;
    let southPlatforms = sp.map(platform => {
      return {
        abbr: platform + 'S',
        name: platform + ' Southbound',
        direction: 'S',
        routes: southRoutes
      }
    });

    res.send(northPlatforms.concat(southPlatforms));
  })
});

app.get('/routes', function(req, res) {
  let routes = req.query.routes.split(',');
  let station = req.query.station;
  let direction = routes.pop();
  Promise.all(
    routes.map(route => {
      return axios.get(api + 'route.aspx?cmd=routeinfo&route=' + route + key)
      .then(result => { return parse(result.data) })
      .then(result => { return result.root.routes[0].route[0] })
    })
  ).then(result => {
    let routes = result.map(route => {
      let stations = route.config[0].station;
      for (let i = 0; i < stations.length; i++) {
        if (stations[i] === station) { route.config[0].station = stations.splice(i); break; }
      }
      return route;
    })
    res.send(routes);
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

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
