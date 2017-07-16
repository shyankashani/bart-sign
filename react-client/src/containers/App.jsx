import React from 'react';
import {connect} from 'react-redux';

import { fetchStations } from '../actions/fetchActions.js';
import { fetchPlatforms } from '../actions/fetchActions.js';
import { fetchRoutes } from '../actions/fetchActions.js';

import { selectStation } from '../actions/selectActions.js';
import { selectPlatform } from '../actions/selectActions.js';

import StationsDropdown from '../components/StationsDropdown.jsx';
import PlatformsDropdown from '../components/PlatformsDropdown.jsx';
import Routes from '../components/Routes.jsx';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchStations();
  }

  render() {
    return (
      <div>
        <StationsDropdown
          stations={this.props.stations}
          station={this.props.station}
          selectStation={this.props.selectStation}
          fetchPlatforms={this.props.fetchPlatforms}
          fetchRoutes={this.props.fetchRoutes}
        />
        <PlatformsDropdown
          platforms={this.props.platforms}
          platform={this.props.platform}
          routes={this.props.routes}
          station={this.props.station}
          selectPlatform={this.props.selectPlatform}
          fetchRoutes={this.props.fetchRoutes}
        />
        <Routes
          routes={this.props.routes}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stations: state.fetchReducer.stations,
    station: state.selectReducer.station,
    platforms: state.fetchReducer.platforms,
    routes: state.fetchReducer.routes,
    platform: state.selectReducer.platform
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStations: () => { dispatch(fetchStations()) },
    fetchPlatforms: station => { dispatch(fetchPlatforms(station)) },
    fetchRoutes: (routes, station) => { dispatch(fetchRoutes(routes, station)) },
    selectStation: event => { dispatch(selectStation(event.target.value)) },
    selectPlatform: event => { dispatch(selectPlatform(event.target.value)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
