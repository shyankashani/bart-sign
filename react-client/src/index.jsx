import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Line from './components/Line.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (<div className="component">
      <h1>App</h1>
      <Line />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
