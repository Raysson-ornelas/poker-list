import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';

interface Props {
  id: string;
  name: string;
  buyIn: Number;
  date: string;
}

function TournamentCard({ id, name, buyIn, date }: Props) {
  return (
    <Link href={`/tournaments/${id}`}>
      <Card>
        <CardHeader
          floated={false}
          className='h-52 flex items-center justify-center bg-red-400'
        >
          <Typography color='white' variant='h2'>
            PokerStars
          </Typography>
        </CardHeader>
        <CardBody className='text-center'>
          <Typography variant='h5' className='mb-2'>
            {name}
          </Typography>
        </CardBody>
        <CardFooter divider className='flex items-center justify-between py-3'>
          <Typography variant='small'>{`$${buyIn}`}</Typography>
          <Typography variant='small' color='gray' className='flex gap-1'>
            {date}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default TournamentCard;
