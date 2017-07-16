import React from 'react';

class PlatformsDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchRoutes(this.props.platform.routes, this.props.station)
  }

  render() {
    return (
      <select
        value={this.props.platform}
        onChange={this.props.selectPlatform.bind(this)}
      >
        {this.props.platforms.map(platform => {
          let abbr = platform.abbr;
          let name = platform.name;
          let direction = platform.direction;
          let routes = platform.routes.join() + ',' + platform.direction;
          return <option key={abbr} value={routes}>{name}</option>
        })}
      </select>
    )
  }
}

export default PlatformsDropdown;
