function PlayerCard({ player, onDelete, onEdit }) {
  return (
    <tr>
      <td>{player.jersey_number}</td>
      <td>{player.name}</td>
      <td>{player.position || 'N/A'}</td>
      <td>{player.goals || 0}</td>
      <td>{player.assists || 0}</td>
      <td>{player.minutes || 0}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={() => onEdit(player)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDelete(player.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default PlayerCard