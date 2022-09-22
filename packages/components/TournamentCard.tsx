import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

interface Props {
  name: string;
  buyIn: Number;
  date: string;
}

function TournamentCard({ name, buyIn, date }: Props) {
  return (
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
  );
}

export default TournamentCard;
