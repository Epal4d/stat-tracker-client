import { useState, useEffect } from 'react'
import MatchList from '../components/match/MatchList'
import MatchForm from '../components/match/MatchForm'
import { getMatches, createMatch, updateMatch, deleteMatch } from '../services/matchService'

function Games() {
  const [matches, setMatches] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState(null)

  useEffect(() => {
    getMatches().then((data) => setMatches(data))
  }, [])

  const handleSave = (formData) => {
    if (selectedMatch) {
      updateMatch(selectedMatch.id, formData).then((updatedMatch) => {
        setMatches(matches.map((m) => m.id === updatedMatch.id ? updatedMatch : m))
        setShowForm(false)
        setSelectedMatch(null)
      })
    } else {
      createMatch(formData).then((newMatch) => {
        setMatches([...matches, newMatch])
        setShowForm(false)
      })
    }
  }

  const handleDelete = (matchId) => {
    if (window.confirm('Are you sure you want to delete this match?')) {
      deleteMatch(matchId).then(() => {
        setMatches(matches.filter((m) => m.id !== matchId))
      })
    }
  }

  const handleEdit = (match) => {
    setSelectedMatch(match)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setSelectedMatch(null)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Games</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          + Log Match
        </button>
      </div>
      {showForm && (
        <MatchForm
          onSave={handleSave}
          onCancel={handleCancel}
          existingMatch={selectedMatch}
        />
      )}
      {matches.length === 0 ? (
        <p className="text-muted">No matches logged yet. Log one to get started.</p>
      ) : (
        <MatchList
          matches={matches}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  )
}

export default Games