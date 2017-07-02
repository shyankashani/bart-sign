import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <select onChange={this.props.fetchRoute}>
        {this.props.stations.map(station => {
          let key = station.abbr[0];
          let value = station.name[0];
          return <option key={key} value={value}>{value}</option>
        })}
      </select>
    )
  }

}

export default Dropdown;
