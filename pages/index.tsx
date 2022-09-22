import { getSession } from 'next-auth/react';
import { Button, Input } from '@material-tailwind/react';
import { PrismaClient } from '@prisma/client';

import Grid from '../packages/components/Grid';
import Navbar from '../packages/components/NavBar';

import type { GetServerSideProps } from 'next';

export default function Home({ initialTournaments = [] }) {
  return (
    <>
      <Navbar />
      <div className='flex flex-col lg:flex-row gap-4 w-full my-8'>
        <Input label='Torneio' />
        <Input label='Data' />
        <Input label='Buy-in' />
        <Button className='lg:w-56'>Salvar</Button>
      </div>
      <Grid tournaments={initialTournaments} />
    </>
  );
}

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const tournaments = await prisma.tournaments.findMany();
  console.log(tournaments);

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
      initialTournaments: JSON.parse(JSON.stringify(tournaments)),
      session,
    },
  };
};
