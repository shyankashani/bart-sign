import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Dropdown from './components/Dropdown.jsx';
import Route from './components/Route.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],

    }
  }

  componentDidMount() {
    axios.get('/stations')
    .then(result => { this.setState({ stations: result.data }) })
  }

  fetchRoute(route) {
    axios.get('/route')
    .then(result => { console.log(result.data); this.setState({ route: result.data }) })
  }

  render() {
    return (
      <div className="component">
        <Dropdown
          stations={this.state.stations}
          fetchRoute={(route) => this.fetchRoute(route)}
        />
      <Route
          stations={this.state.stations}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
