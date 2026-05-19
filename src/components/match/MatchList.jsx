import MatchCard from './MatchCard'

function MatchList({ matches, onDelete, onEdit }) {
  return (
    <div>
      {matches.map((match) => (
        <MatchCard
          key={match.id}
          match={match}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default MatchList