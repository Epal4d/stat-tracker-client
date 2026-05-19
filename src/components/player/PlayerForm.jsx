import { useState, useEffect } from 'react'

function PlayerForm({ onSave, onCancel, existingPlayer }) {
  const [formData, setFormData] = useState({
    name: '',
    jersey_number: '',
    position_id: '',
    birthday: '',
  })

  useEffect(() => {
    if (existingPlayer) {
      setFormData({
        name: existingPlayer.name,
        jersey_number: existingPlayer.jersey_number,
        position_id: existingPlayer.position_id || '',
        birthday: existingPlayer.birthday || '',
      })
    }
  }, [existingPlayer])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">
          {existingPlayer ? 'Edit Player' : 'Add Player'}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label className="form-label">Jersey Number</label>
              <input
                type="number"
                className="form-control"
                name="jersey_number"
                value={formData.jersey_number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Position</label>
              <select
                className="form-select"
                name="position_id"
                value={formData.position_id}
                onChange={handleChange}
              >
                <option value="">Select a position</option>
                <option value="1">Goalkeeper</option>
                <option value="2">Defender</option>
                <option value="3">Midfielder</option>
                <option value="4">Forward</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">Birthday</label>
              <input
                type="date"
                className="form-control"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {existingPlayer ? 'Save Changes' : 'Add Player'}
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

export default PlayerForm