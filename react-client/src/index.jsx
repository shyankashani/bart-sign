import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StationsDropdown from './components/StationsDropdown.jsx';
import PlatformsDropdown from './components/PlatformsDropdown.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      station: undefined,
      platforms: [],
      platform: undefined
    }
  }

  componentDidMount() {
    this.fetchStations();
  }

  fetchStations() {
    axios.get('/stations')
    .then(result => { this.setState({ stations: result.data })
                      console.log('fetchStations', result.data) })
  }

  fetchPlatforms(station) {
    axios.get('/platforms', { params: { station: station } })
    .then(result => { this.setState({ platforms: result.data, station: station });
                      console.log('fetchPlatforms', result.data)})
  }

  fetchRoutes(routes) {
    axios.get('/routes', { params: { routes: routes } })
    .then(result => { console.log('fetchRoutes', result.data) })
  }

  fetchStationInfo(station) {
    axios.get('/stationInfo', { params: { station: station } })
    .then(result => { this.setState({ stationInfo: result.data, station: station });
                      console.log('fetchStationInfo', result.data)})
  }

  fetchRoute(route) {
    axios.get('/route')
    .then(result => { this.setState({ route: result.data });
                      console.log('fetchRoute', result) })
  }

  render() {
    return (
      <div>
        <StationsDropdown
          stations={this.state.stations}
          station={this.state.station}
          fetchPlatforms={this.fetchPlatforms.bind(this)}
        />
        <PlatformsDropdown
          platforms={this.state.platforms}
          platform={this.state.platform}
          fetchRoutes={this.fetchRoutes.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
