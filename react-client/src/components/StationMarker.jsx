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
    context.lineWidth = 4;
    context.strokeStyle = 'black';
    context.lineTo(40, 0);
    context.lineTo(40, 80);
    context.stroke();
    context.closePath()

    context.beginPath();
    context.lineWidth = 4;
    context.fillStyle = 'white';
    context.arc(40, 40, 15, 15, Math.PI * 2, true);
    context.fill()
    context.stroke();
    context.closePath();
  }

  render() {
    return (
      <div className="component station-marker">
        <canvas
          width="80px"
          height="80px"
          ref="canvas"
        />
      </div>
    )
  }

}

export default StationMarker;
