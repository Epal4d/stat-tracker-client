import { Routes, Route } from 'react-router-dom'
import NavBar from './components/nav/NavBar'
import Home from './pages/Home'
import Roster from './pages/Roster'
import Games from './pages/Games'
import MatchDetail from './pages/MatchDetail'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/games" element={<Games />} />
          <Route path="/matches/:matchId" element={<MatchDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App