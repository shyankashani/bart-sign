import React from 'react';
import Direction from './Direction.jsx';

class Directions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component">
        <h4>Directions</h4>
        <Direction />
        <Direction />
      </div>
    )
  }

}

export default Directions;
