import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Roster from './pages/Roster'
import Games from './pages/Games'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roster" element={<Roster />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  )
}

export default App