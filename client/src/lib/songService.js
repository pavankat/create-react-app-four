const baseUrl = process.env.REACT_APP_API + '/songs';

export const __loadSongs = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const __loadSong = (song) => {
  return fetch(`${baseUrl}/${song._id}`)
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

export const __destroySong = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}