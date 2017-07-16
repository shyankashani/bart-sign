import React from 'react';

class StationsDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPlatforms(this.props.station)
  }

  render() {
    return (
      <select
        value={this.props.station}
        onChange={this.props.selectStation.bind(this)}
      >
        {this.props.stations.map(station => {
          let abbr = station.abbr[0];
          let name = station.name[0];
          return <option key={abbr} value={abbr}>{name}</option>
        })}
      </select>
    )
  }

}

export default StationsDropdown;
