import React from 'react';
import ReactDOM from 'react-dom';
import Station from './Station.jsx';
import Promise from 'bluebird';
var renderedStations = [];

class Route extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    renderedStations = [];
  }

  render() {
    return (
      <div className="component route">
        {this.props.route.config[0].station.map(station => {
          if (renderedStations.includes(station)) {
            return <div>test</div>
          } else {
            renderedStations.push(station);
            return <Station key={station} station={station} />
          }
        })}
      </div>
    )
  }

}

export default Route;
