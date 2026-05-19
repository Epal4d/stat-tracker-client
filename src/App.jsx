import { Routes, Route } from 'react-router-dom'
import NavBar from './components/nav/NavBar'
import ProtectedRoute from './components/ProtectedRoute'
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/roster" element={<ProtectedRoute><Roster /></ProtectedRoute>} />
          <Route path="/games" element={<ProtectedRoute><Games /></ProtectedRoute>} />
          <Route path="/matches/:matchId" element={<ProtectedRoute><MatchDetail /></ProtectedRoute>} />
        </Routes>
      </div>
    </>
  )
}

export default App