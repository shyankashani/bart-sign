import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  selectStation(event) {
    this.props.fetchStationInfo(event.target.value)
  }

  render() {
    return (
      <select
        value={this.props.station}
        onChange={this.selectStation.bind(this)}
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

export default Dropdown;
