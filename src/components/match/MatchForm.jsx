import { useState, useEffect } from 'react'

function MatchForm({ onSave, onCancel, existingMatch }) {
  const [formData, setFormData] = useState({
    opponent_name: '',
    date: '',
    location: '',
    match_type_id: '',
    team_score: 0,
    opponent_score: 0,
  })

  useEffect(() => {
    if (existingMatch) {
      setFormData({
        opponent_name: existingMatch.opponent_name,
        date: existingMatch.date,
        location: existingMatch.location,
        match_type_id: existingMatch.match_type_id || '',
        team_score: existingMatch.team_score,
        opponent_score: existingMatch.opponent_score,
      })
    }
  }, [existingMatch])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!formData.match_type_id) {
      alert('Please select a match type')
      return
    }
    onSave(formData)
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">
          {existingMatch ? 'Edit Match' : 'Log Match'}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Opponent Name</label>
              <input
                type="text"
                className="form-control"
                name="opponent_name"
                value={formData.opponent_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label className="form-label">Match Type</label>
              <select
                className="form-select"
                name="match_type_id"
                value={formData.match_type_id}
                onChange={handleChange}
              >
                <option value="">Select a match type</option>
                <option value="1">Friendly</option>
                <option value="2">Tournament</option>
                <option value="3">State League</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Your Score</label>
              <input
                type="number"
                className="form-control"
                name="team_score"
                value={formData.team_score}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label className="form-label">Opponent Score</label>
              <input
                type="number"
                className="form-control"
                name="opponent_score"
                value={formData.opponent_score}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {existingMatch ? 'Save Changes' : 'Log Match'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MatchForm