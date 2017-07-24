import React from 'react';
import {connect} from 'react-redux';

const actions = require('./actions.js');

import SelectStation from './components/SelectStation.jsx';
import SelectPlatform from './components/SelectPlatform.jsx';
import Routes from './components/Routes.jsx';

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
          fetchPlatforms={this.props.fetchPlatforms}
          fetchRoutes={this.props.fetchRoutes}
        />
        <PlatformsDropdown
          platforms={this.props.platforms}
          platform={this.props.platform}
          routes={this.props.routes}
          station={this.props.station}
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
    stations: state.stations,
    station: state.station,
    platforms: state.platforms,
    platform: state.platform,
    routes: state.routes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStations: () => { dispatch(fetchStations()) },
    fetchPlatforms: station => { dispatch(fetchPlatforms(station)) },
    fetchRoutes: (routes, station) => { dispatch(fetchRoutes(routes, station)) },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
