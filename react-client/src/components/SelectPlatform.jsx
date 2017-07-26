import React from 'react';

export default class SelectPlatform extends React.Component {

  constructor(props) { super(props); };

  render() {
    return (
      <select
        id="selectPlatform"
        value={this.props.redux.store.platform}
        onChange={() => {this.props.redux.dispatch.getRoutes(
          this.props.redux.store.station,
          document.getElementById("selectPlatform").value
        )}}>
        <option key="0" value="0">Select a platform</option>
        {this.props.redux.store.platforms.map(platform => {
          return <option key={platform.abbr} value={platform.abbr}>{platform.abbr}</option>
        })}
      </select>
    )
  };

}
