import PlayerCard from './PlayerCard'

function PlayerList({ players, onDelete, onEdit }) {
  return (
    <table className="table table-hover">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Position</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Minutes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  )
}

export default PlayerList