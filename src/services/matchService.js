const baseUrl = 'http://127.0.0.1:8000/api'

const getToken = () => localStorage.getItem('token')

export const getMatches = () => {
  return fetch(`${baseUrl}/matches/`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const createMatch = (matchData) => {
  return fetch(`${baseUrl}/matches/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    },
    body: JSON.stringify(matchData),
  }).then((res) => res.json())
}

export const updateMatch = (matchId, matchData) => {
  return fetch(`${baseUrl}/matches/${matchId}/update/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    },
    body: JSON.stringify(matchData),
  }).then((res) => res.json())
}

export const deleteMatch = (matchId) => {
  return fetch(`${baseUrl}/matches/${matchId}/delete/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}