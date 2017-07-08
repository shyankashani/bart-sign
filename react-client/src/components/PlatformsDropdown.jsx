import React from 'react';

class PlatformsDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <select
        value={this.props.platform}
      >
        {this.props.platforms.map(platform => {
          let abbr = platform.abbr;
          let name = platform.name;
          return <option key={abbr} value={abbr}>{name}</option>
        })}
      </select>
    )
  }
}

export default PlatformsDropdown;
