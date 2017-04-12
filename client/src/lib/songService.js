const baseUrl = '/songs'; //because of the proxy in package.json of the client/package.json it'll know to use localhost:3001 before /songs on your dev environment - THIS IS NOT A NPM THING - this is a create-react-app thing

export const __loadSpotifyInformation = (artist, songName) => {
  return fetch(`${baseUrl}/${artist}/${songName}`)
    .then(res => res.json())
}

export const __loadSongs = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const __loadSong = (_id) => {
  return fetch(`${baseUrl}/${_id}`)
    .then(res => res.json())
}

export const __createSong = (song) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(song)
  }).then(res => res.json())
}

export const __updateSong = (song, _id) => {
  return fetch(`${baseUrl}/${_id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(song)
  }).then(res => res.json())
}

//this is the route we're hitting on our express api
  //songs/votes/:id/:direction
export const __voteOnSong = (_id, direction) => {
  return fetch(`${baseUrl}/votes/${_id}/${direction}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export const __destroySong = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}