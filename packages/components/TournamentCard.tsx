import Link from 'next/link';

interface Props {
  id: string;
  name: string;
  buyIn: Number;
  date: string;
}

function TournamentCard({ id, name, buyIn, date }: Props) {
  return <Link href={`/tournaments/${id}`}>{name}</Link>;
}

export default TournamentCard;
