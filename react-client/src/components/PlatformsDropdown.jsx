import React from 'react';

class PlatformsDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  selectPlatform(event) {
    this.props.fetchRoutes(event.target.value)
  }

  render() {
    return (
      <select
        value={this.props.platform}
        onChange={this.selectPlatform.bind(this)}
      >
        {this.props.platforms.map(platform => {
          let abbr = platform.abbr;
          let name = platform.name;
          let routes = platform.routes.join();
          return <option key={abbr} value={routes}>{name}</option>
        })}
      </select>
    )
  }
}

export default PlatformsDropdown;
