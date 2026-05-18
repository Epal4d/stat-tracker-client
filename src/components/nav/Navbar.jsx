import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">StatTrack</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/roster">Roster</Link>
          <Link className="nav-link" to="/games">Games</Link>
          <button className="btn btn-outline-danger ms-3">Log Out</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar