import { useNavigate } from 'react-router-dom'

function MatchCard({ match, onDelete, onEdit }) {
  const navigate = useNavigate()

  const getResult = () => {
    if (match.team_score > match.opponent_score) return { label: 'W', className: 'bg-success' }
    if (match.team_score < match.opponent_score) return { label: 'L', className: 'bg-danger' }
    return { label: 'D', className: 'bg-warning' }
  }

  const result = getResult()

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/matches/${match.id}`)}
          >
            <h5 className="card-title mb-1">vs {match.opponent_name}</h5>
            <p className="text-muted mb-1 small">{match.date} · {match.location} · {match.match_type}</p>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold">{match.team_score} – {match.opponent_score}</span>
              <span className={`badge ${result.className}`}>{result.label}</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => onEdit(match)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onDelete(match.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchCard