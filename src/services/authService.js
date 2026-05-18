const baseUrl = 'http://127.0.0.1:8000/api'

export const loginUser = (credentials) => {
  return fetch(`${baseUrl}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((res) => res.json())
}

export const registerUser = (userData) => {
  return fetch(`${baseUrl}/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then((res) => res.json())
}

export const logoutUser = () => {
  return fetch(`${baseUrl}/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }).then((res) => res.json())
}