const baseUrl = 'http://127.0.0.1:8000/api'

const getToken = () => localStorage.getItem('token')

export const getPlayers = () => {
  return fetch(`${baseUrl}/players/`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const createPlayer = (playerData) => {
  return fetch(`${baseUrl}/players/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    },
    body: JSON.stringify(playerData),
  }).then((res) => res.json())
}

export const updatePlayer = (playerId, playerData) => {
  return fetch(`${baseUrl}/players/${playerId}/update/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    },
    body: JSON.stringify(playerData),
  }).then((res) => res.json())
}

export const deletePlayer = (playerId) => {
  return fetch(`${baseUrl}/players/${playerId}/delete/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}