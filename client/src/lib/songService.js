const baseUrl = 'http://localhost:3001/songs'

export const loadSongs = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const loadSong = (song) => {
  return fetch(`${baseUrl}/${song._id}`)
    .then(res => res.json())
}

export const createSong = (song) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(song)
  }).then(res => res.json())
}

export const updateSong = (song) => {
  return fetch(`${baseUrl}/${song._id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(song)
  }).then(res => res.json())
}

export const destroySong = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}