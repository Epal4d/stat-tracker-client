const baseUrl = 'http://127.0.0.1:8000/api'

const getToken = () => localStorage.getItem('token')

export const getPlayerStats = (matchId) => {
  return fetch(`${baseUrl}/matches/${matchId}/stats/`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const createPlayerStat = (matchId, statData) => {
  return fetch(`${baseUrl}/matches/${matchId}/stats/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    },
    body: JSON.stringify(statData),
  }).then((res) => res.json())
}

export const updatePlayerStat = (matchId, statId, statData) => {
  return fetch(`${baseUrl}/matches/${matchId}/stats/${statId}/update/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    },
    body: JSON.stringify(statData),
  }).then((res) => res.json())
}

export const deletePlayerStat = (matchId, statId) => {
  return fetch(`${baseUrl}/matches/${matchId}/stats/${statId}/delete/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}