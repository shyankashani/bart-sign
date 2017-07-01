import React from 'react';
import Station from './Station.jsx';

class Line extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component line">
        <h4>Line</h4>
        <Station />
        <Station />
        <Station />
        <Station />
      </div>
    )
  }

}

export default Line;
