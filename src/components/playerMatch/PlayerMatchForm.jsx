import { useState, useEffect } from 'react'

function PlayerMatchForm({ onSave, onCancel, existingStat, players }) {
  const [formData, setFormData] = useState({
    player_id: '',
    goals: 0,
    assists: 0,
    minutes: 0,
    yellow_cards: 0,
    red_cards: 0,
    shots_taken: 0,
  })

  useEffect(() => {
    if (existingStat) {
      setFormData({
        player_id: existingStat.player_id,
        goals: existingStat.goals,
        assists: existingStat.assists,
        minutes: existingStat.minutes,
        yellow_cards: existingStat.yellow_cards,
        red_cards: existingStat.red_cards,
        shots_taken: existingStat.shots_taken,
      })
    }
  }, [existingStat])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.player_id) {
      alert('Please select a player')
      return
    }
    onSave(formData)
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          {existingStat ? 'Edit Stats' : 'Record Player Stats'}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Player</label>
            <select
              className="form-select"
              name="player_id"
              value={formData.player_id}
              onChange={handleChange}
              disabled={!!existingStat}
            >
              <option value="">Select a player</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Goals</label>
              <input type="number" className="form-control" name="goals" value={formData.goals} onChange={handleChange} min="0" />
            </div>
            <div className="col">
              <label className="form-label">Assists</label>
              <input type="number" className="form-control" name="assists" value={formData.assists} onChange={handleChange} min="0" />
            </div>
            <div className="col">
              <label className="form-label">Minutes</label>
              <input type="number" className="form-control" name="minutes" value={formData.minutes} onChange={handleChange} min="0" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
                <label className="form-label">Yellow Cards</label>
                <input type="number" className="form-control" name="yellow_cards" value={formData.yellow_cards} onChange={handleChange} min="0" />
            </div>
            <div className="col">
                <label className="form-label">Red Cards</label>
                <input type="number" className="form-control" name="red_cards" value={formData.red_cards} onChange={handleChange} min="0" />
            </div>
            </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {existingStat ? 'Save Changes' : 'Record Stats'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PlayerMatchForm