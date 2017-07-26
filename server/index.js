var express = require('express');
var axios = require('axios');
var parse = require('xml2js-es6-promise');
var api = 'http://api.bart.gov/api/';
var key = '&key=MW9S-E7SL-26DU-VV8V';

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/stations', function(req, res) {
  axios.get(api + 'stn.aspx?cmd=stns' + key)
  .then(result => { return parse(result.data) })
  .then(result => {
    res.send(result.root.stations[0].station);
  })
});

app.get('/platforms/:station', function(req, res) {
  axios.get(`${api}stn.aspx?cmd=stninfo&orig=${req.params.station}${key}`)
  .then(result => { return parse(result.data) })
  .then(result => {

    let northPlatforms = result.root.stations[0].station[0].north_platforms[0].platform.map(platform => {
      return { abbr: `${platform}N` }
    });

    let southPlatforms = result.root.stations[0].station[0].south_platforms[0].platform.map(platform => {
      return { abbr: `${platform}S` }
    });

    let allPlatforms = northPlatforms.concat(southPlatforms);

    res.send(allPlatforms);

  })
})

app.get('/routes/:station/:platform', function(req, res) {
  axios.get(`${api}stn.aspx?cmd=stninfo&orig=${req.params.station}${key}`)
  .then(result => { return parse(result.data) })
  .then(result => {
    if (req.params.platform[req.params.platform.length - 1] === `N`) {
      return result.root.stations[0].station[0].north_routes[0].route.map(route => { return route.split(' ').pop() });
    }
    if (req.params.platform[req.params.platform.length - 1] === `S`) {
      return result.root.stations[0].station[0].south_routes[0].route.map(route => { return route.split(' ').pop() });
    }
  })
  .then(result => {
    Promise.all(
      result.map(route => {
        return axios.get(`${api}route.aspx?cmd=routeinfo&route=${route}${key}`)
        .then(result => { return parse(result.data) })
        .then(result => { return result.root.routes[0].route[0] })
      })
    ).then(result => {
      var routes = result.map(route => {
        let stations = route.config[0].station;
        for (let i = 0; i < stations.length; i++) {
          if (stations[i] === req.params.station) { route.config[0].station = stations.splice(i); break; }
        }
        return route;
      })
      res.send(routes);
    })
  })
});


// app.get('/stationInfo', function(req, res) {
//   let orig = req.query.station;
//   axios.get(api + 'stn.aspx?cmd=stninfo&orig=' + orig + key)
//   .then(result => { return parse(result.data) })
//   .then(result => {
//     let stationInfo = result.root.stations[0].station[0];
//     res.send(stationInfo)
//   })
// });

app.listen(8080, function() {
  console.log('listening on port 8080!');
});
