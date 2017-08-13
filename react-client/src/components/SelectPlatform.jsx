import React from 'react';

export const SelectPlatform = ({ match }) => (
  <ul id="selectPlatform">
    <div>{match.params.stationAbbr}</div>
  </ul>
)


// {this.props.redux.store.platforms.map(platform => (
//   <li key={platform.abbr} value={platform.abbr}>
//     {platform.abbr}
//   </li>
// ))}
