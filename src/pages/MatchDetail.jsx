import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PlayerMatchRow from '../components/playerMatch/PlayerMatchRow'
import PlayerMatchForm from '../components/playerMatch/PlayerMatchForm'
import { getMatches } from '../services/matchService'
import { getPlayers } from '../services/playerService'
import { getPlayerStats, createPlayerStat, updatePlayerStat, deletePlayerStat } from '../services/playerMatchService'

function MatchDetail() {
  const { matchId } = useParams()
  const navigate = useNavigate()
  const [match, setMatch] = useState(null)
  const [stats, setStats] = useState([])
  const [players, setPlayers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [selectedStat, setSelectedStat] = useState(null)

  useEffect(() => {
    getMatches().then((data) => {
      const found = data.find((m) => m.id === parseInt(matchId))
      setMatch(found)
    })
    getPlayerStats(matchId).then((data) => setStats(data))
    getPlayers().then((data) => setPlayers(data))
  }, [matchId])

  const getResult = () => {
    if (!match) return null
    if (match.team_score > match.opponent_score) return { label: 'W', className: 'bg-success' }
    if (match.team_score < match.opponent_score) return { label: 'L', className: 'bg-danger' }
    return { label: 'D', className: 'bg-warning' }
  }

  const handleSave = (formData) => {
    if (selectedStat) {
      updatePlayerStat(matchId, selectedStat.id, formData).then((updatedStat) => {
        setStats(stats.map((s) => s.id === updatedStat.id ? updatedStat : s))
        setShowForm(false)
        setSelectedStat(null)
      })
    } else {
      createPlayerStat(matchId, formData).then((newStat) => {
        setStats([...stats, newStat])
        setShowForm(false)
      })
    }
  }

  const handleDelete = (statId) => {
    if (window.confirm('Are you sure you want to delete this stat entry?')) {
      deletePlayerStat(matchId, statId).then(() => {
        setStats(stats.filter((s) => s.id !== statId))
      })
    }
  }

  const handleEdit = (stat) => {
    setSelectedStat(stat)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setSelectedStat(null)
  }

  const result = getResult()

  if (!match) return <p>Loading...</p>

  return (
    <div>
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate('/games')}
      >
        ← Back to Games
      </button>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="mb-1">vs {match.opponent_name}</h2>
              <p className="text-muted mb-0">{match.date} · {match.location} · {match.match_type}</p>
            </div>
            <div className="text-end">
              <h3 className="mb-1">{match.team_score} – {match.opponent_score}</h3>
              {result && <span className={`badge ${result.className}`}>{result.label}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Player Stats</h4>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          + Record Stats
        </button>
      </div>

      {showForm && (
        <PlayerMatchForm
          onSave={handleSave}
          onCancel={handleCancel}
          existingStat={selectedStat}
          players={players}
        />
      )}

      {stats.length === 0 ? (
        <p className="text-muted">No stats recorded for this match yet.</p>
      ) : (
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Player</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Minutes</th>
              <th>Yellow Cards</th>
              <th>Red Cards</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => (
              <PlayerMatchRow
                key={stat.id}
                stat={stat}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default MatchDetail