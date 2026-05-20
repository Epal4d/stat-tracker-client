import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMatches } from '../services/matchService'

function Home() {
  const [recentMatches, setRecentMatches] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getMatches().then((data) => {
      const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date))
      setRecentMatches(sorted.slice(0, 3))
    })
  }, [])

  const getResult = (match) => {
    if (match.team_score > match.opponent_score) return { label: 'W', className: 'bg-success' }
    if (match.team_score < match.opponent_score) return { label: 'L', className: 'bg-danger' }
    return { label: 'D', className: 'bg-warning' }
  }

  return (
    <div>
      <h1 className="mb-4">Welcome to StatTrack</h1>
      <h4 className="mb-3">Recent Matches</h4>
      {recentMatches.length === 0 ? (
        <p className="text-muted">No matches logged yet. Head to the Games tab to log your first match.</p>
      ) : (
        <div className="row">
          {recentMatches.map((match) => {
            const result = getResult(match)
            return (
              <div key={match.id} className="col-md-4">
                <div
                  className="card shadow-sm mb-3"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/matches/${match.id}`)}
                >
                  <div className="card-body">
                    <h5 className="card-title">vs {match.opponent_name}</h5>
                    <p className="text-muted small mb-1">{match.date} · {match.location}</p>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold">{match.team_score} – {match.opponent_score}</span>
                      <span className={`badge ${result.className}`}>{result.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Home