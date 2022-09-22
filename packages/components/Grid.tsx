import { Typography } from '@material-tailwind/react';

import TournamentCard from './TournamentCard';

interface TournamentType {
  id: string;
  name: string;
  buyIn: Number;
  date: string;
}

function Grid({ tournaments = [] }) {
  const isEmpty = tournaments.length === 0;

  return isEmpty ? (
    <Typography>Unfortunately, there is nothing to display yet.</Typography>
  ) : (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {tournaments.map((tournament: TournamentType) => (
        <TournamentCard key={tournament.id} {...tournament} />
      ))}
    </div>
  );
}

export default Grid;
