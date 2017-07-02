import React from 'react';
import StationLabel from './StationLabel.jsx';
import StationMarker from './StationMarker.jsx';

class Station extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component station">
        <StationMarker />
      </div>
    )
  }

}

export default Station;
