import React from 'react';

class SelectPlatform extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <select
        value={this.props.routes}
        onChange={event => this.props.fetchRoutes(event.target.value, this.props.station)}
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

export default SelectPlatform;
