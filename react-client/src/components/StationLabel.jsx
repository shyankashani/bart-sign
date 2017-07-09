import React from 'react';

class StationLabel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component station-label">
        <h4>{this.props.station}</h4>
      </div>
    )
  }

}

export default StationLabel;
