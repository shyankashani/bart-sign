import React from 'react';



export default class SelectStation extends React.Component {

  constructor(props) { super(props); };

  render() {
    return (
      <select
        id="selectStation"
        value={this.props.redux.store.station}
        onChange={() => {this.props.redux.dispatch.fetchPlatforms(document.getElementById("selectStation").value)}}>
        {this.props.redux.store.stations.map(station => {
          return <option key={station.abbr} value={station.abbr}>{station.name}</option>
        })}
      </select>
    )
  };

  componentDidMount() {
  }


}
