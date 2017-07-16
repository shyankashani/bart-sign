export function selectStation(station) {
  return {
    type: 'SELECT_STATION',
    payload: station
  }
}

export function selectPlatform(platform) {
  return {
    type: 'SELECT_PLATFORM',
    payload: platform
  }
}
