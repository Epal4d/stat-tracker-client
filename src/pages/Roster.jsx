import { useState, useEffect } from 'react'
import PlayerList from '../components/player/PlayerList'
import PlayerForm from '../components/player/PlayerForm'
import { getPlayers, createPlayer, updatePlayer, deletePlayer } from '../services/playerService'

function Roster() {
  const [players, setPlayers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  useEffect(() => {
    getPlayers().then((data) => setPlayers(data))
  }, [])

  const handleSave = (formData) => {
    if (selectedPlayer) {
      updatePlayer(selectedPlayer.id, formData).then((updatedPlayer) => {
        setPlayers(players.map((p) => p.id === updatedPlayer.id ? updatedPlayer : p))
        setShowForm(false)
        setSelectedPlayer(null)
      })
    } else {
      createPlayer(formData).then((newPlayer) => {
        setPlayers([...players, newPlayer])
        setShowForm(false)
      })
    }
  }

  const handleDelete = (playerId) => {
    if (window.confirm('Are you sure you want to delete this player?')) {
      deletePlayer(playerId).then(() => {
        setPlayers(players.filter((p) => p.id !== playerId))
      })
    }
  }

  const handleEdit = (player) => {
    setSelectedPlayer(player)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setSelectedPlayer(null)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Roster</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          + Add Player
        </button>
      </div>
      {showForm && (
        <PlayerForm
          onSave={handleSave}
          onCancel={handleCancel}
          existingPlayer={selectedPlayer}
        />
      )}
      {players.length === 0 ? (
        <p className="text-muted">No players on your roster yet. Add one to get started.</p>
      ) : (
        <PlayerList
          players={players}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  )
}

export default Roster