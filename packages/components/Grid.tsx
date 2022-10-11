import { Tournaments } from '@prisma/client';

import TournamentCard from './TournamentCard';

function Grid({ tournaments = [] }) {
  const isEmpty = tournaments.length === 0;

  return isEmpty ? (
    <p>Unfortunately, there is nothing to display yet.</p>
  ) : (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {tournaments.map((tournament: Tournaments) => (
        <TournamentCard key={tournament.id} {...tournament} />
      ))}
    </div>
  );
}

export default Grid;
