function PlayerMatchRow({ stat, onEdit, onDelete }) {
  return (
    <tr>
      <td>{stat.player_name}</td>
      <td>{stat.goals}</td>
      <td>{stat.assists}</td>
      <td>{stat.minutes}</td>
      <td>{stat.yellow_cards}</td>
      <td>{stat.red_cards}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={() => onEdit(stat)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDelete(stat.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default PlayerMatchRow