import { GetServerSideProps, NextPage } from 'next';
import { Button, Input, Typography } from '@material-tailwind/react';
import { getSession } from 'next-auth/react';
import { useState } from 'react';

import Layout from '../packages/components/Layout';

const Create: NextPage = () => {
  const [tournament, setTournament] = useState({
    name: '',
    date: '',
    buyIn: 0,
  });

  const valueInput = (e: { target: HTMLInputElement }) => {
    setTournament({
      ...tournament,
      [e.target.name]:
        e.target.name === 'buyIn' ? e.target.valueAsNumber : e.target.value,
    });
  };

  const addTournament = () => {
    fetch('/api/tournaments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tournament),
    });

    setTournament({
      name: '',
      date: '',
      buyIn: 0,
    });
  };

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-y-8'>
        <Typography variant='h3' color='white'>
          Cadastre aqui o torneio
        </Typography>
        <div className='lg:w-2/5 bg-white rounded-lg p-8 grid grid-cols-1 gap-4'>
          <Input
            label='Torneio'
            variant='standard'
            name='name'
            onChange={valueInput}
            value={tournament.name}
          />
          <Input
            label='Data'
            variant='standard'
            type='datetime-local'
            className='fill-white'
            name='date'
            onChange={valueInput}
            value={tournament.date}
          />
          <Input
            label='Buy-in'
            variant='standard'
            type='number'
            name='buyIn'
            onChange={valueInput}
            value={tournament.buyIn}
          />
          <Button onClick={() => addTournament()}>Salvar</Button>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Create;
