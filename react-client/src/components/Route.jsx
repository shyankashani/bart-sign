import React from 'react';
import Station from './Station.jsx';

class Route extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component route">
        {this.props.stations.map(station => {
          let key = station.abbr[0];
          return <Station key={key} station={this.props.station} />
        })}
      </div>
    )
  }

}

export default Route;
