import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../services/authService'

function NavBar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser().then(() => {
      localStorage.removeItem('token')
      navigate('/login')
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">StatTrack</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/roster">Roster</Link>
          <Link className="nav-link" to="/games">Games</Link>
          <button
            className="btn btn-outline-danger ms-3"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar