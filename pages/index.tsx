import { getSession } from 'next-auth/react';
import { Button, Input } from '@material-tailwind/react';

import NavBar from '../packages/components/NavBar';

import type { GetServerSideProps, NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className='flex flex-col lg:flex-row gap-4 w-full my-8'>
        <Input label='Torneio' />
        <Input label='Data' />
        <Input label='Buy-in' />
        <Button className='lg:w-56'>Salvar</Button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
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

export default Home;
