import React from 'react';
import Line from './Line.jsx';

class Direction extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component direction">
        <h4>Direction</h4>
        <Line />
        <Line />
      </div>
    )
  }

}

export default Direction;
