import React from 'react';
import Route from './Route.jsx';

class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="component route">
        {this.props.routes.map(route => {
          let abbr = route.abbr;
          return <Route key={abbr} route={route} />
        })}
      </div>
    )
  }

}

export default Routes;
