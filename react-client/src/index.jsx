import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Dropdown from './components/Dropdown.jsx';
import Route from './components/Route.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      station: undefined,
      stationInfo: undefined
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

  fetchStationInfo(station) {
    axios.get('/stationInfo', { params: { station: station } })
    .then(result => { this.setState({ stationInfo: result, station: station });
                      console.log('fetchStationInfo', result.data)})
  }

  fetchRoute(route) {
    axios.get('/route')
    .then(result => { this.setState({ route: result.data });
                      console.log('fetchRoute', result.data) })
  }

  render() {
    return (
      <div>
        <Dropdown
          stations={this.state.stations}
          station={this.state.station}
          fetchStationInfo={this.fetchStationInfo.bind(this)}
        />
      <Route
          stations={this.state.stations}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
