import React from 'react';
import { Link } from 'react-router-dom';


export default class SelectStation extends React.Component {

  constructor(props) { super(props); };

  render() {
    return (
      <ul id="selectStation">
        {this.props.redux.store.stations.map(station => (
          <li key={station.abbr} value={station.abbr}>
            <Link to={`${station.abbr}`}>
              {station.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  };

  componentDidMount() {
  }


}
