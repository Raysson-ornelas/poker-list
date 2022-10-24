import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useState } from 'react';

import Layout from '../packages/layout/Layout';

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
        <p>Cadastre aqui o torneio</p>
        <div className='lg:w-2/5 bg-white rounded-lg p-8 grid grid-cols-1 gap-4'>
          <input name='name' onChange={valueInput} value={tournament.name} />
          <input
            type='datetime-local'
            className='fill-white'
            name='date'
            onChange={valueInput}
            value={tournament.date}
          />
          <input
            type='number'
            name='buyIn'
            onChange={valueInput}
            value={tournament.buyIn}
          />
          <button onClick={() => addTournament()}>Salvar</button>
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
