import React from 'react';
import ReactDOM from 'react-dom';

class StationMarker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var canvas = ReactDOM.findDOMNode(this.refs.canvas);
    var context = canvas.getContext('2d');

    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = 'black';
    context.lineTo(50, 0);
    context.lineTo(50, 100);
    context.stroke();
    context.closePath()

    context.beginPath();
    context.lineWidth = 6;
    context.fillStyle = 'white';
    context.arc(50, 50, 15, 15, Math.PI * 2, true);
    context.fill()
    context.stroke();
    context.closePath();
  }

  render() {
    return (
      <div className="component station-marker">
        <canvas
          width="100px"
          height="100px"
          ref="canvas"
        />
      </div>
    )
  }

}

export default StationMarker;
