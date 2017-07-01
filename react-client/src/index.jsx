import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Directions from './components/Directions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (<div className="component">
      <h1>App</h1>
      <Directions />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
