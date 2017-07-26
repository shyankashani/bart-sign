import React from 'react';
import {connect} from 'react-redux';

import actions from './actions.js';

import SelectStation from './components/SelectStation.jsx';
import SelectPlatform from './components/SelectPlatform.jsx';
import Routes from './components/Routes.jsx';

const mapStateToProps = state => {
  return {
    store: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: {
      getStations: () => { dispatch(actions.getStations()) },
      getPlatforms: station => { dispatch(actions.getPlatforms(station)) },
      getRoutes: (station, platform) => { dispatch(actions.getRoutes(station, platform)) }
    }
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <SelectStation redux={this.props} />
        <SelectPlatform redux={this.props} />
      </div>
    )
  }

  componentDidMount() {
    this.props.dispatch.getStations();
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
