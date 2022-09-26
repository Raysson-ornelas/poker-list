import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

import Grid from '../packages/components/Grid';
import Layout from '../packages/components/Layout';

import type { GetServerSideProps } from 'next';

export default function Home({ initialTournaments = [] }) {
  return (
    <Layout>
      <Grid tournaments={initialTournaments} />
    </Layout>
  );
}

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const tournaments = await prisma.tournaments.findMany();

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
