import React from 'react';
import { Route } from 'react-router';
import TestComponent from './TestComponent.jsx';

class ReduxTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component station">
        <Route path="/TestComponent" component={TestComponent}></Route>
      </div>
    )
  }

}

export default ReduxTest;
