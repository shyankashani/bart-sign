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
        {this.props.route.config[0].station.map(station => {
          return <Station key={station} station={station} />
        })}
      </div>
    )
  }

}

export default Route;
