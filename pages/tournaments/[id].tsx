import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { PrismaClient, Tournaments } from '@prisma/client';

import Layout from '../../packages/components/Layout';

interface IParams extends ParsedUrlQuery {
  id: string;
}

//TODO: Criar o layout dessa pagina
const ListedTournaments = (props: Tournaments) => {
  const router = useRouter();

  if (router.isFallback) {
    return 'Loading...';
  }

  return (
    <Layout>
      <h1>{props.id}</h1>
    </Layout>
  );
};

export default ListedTournaments;

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const tournament = await prisma.tournaments.findUnique({
    where: { id: id },
  });

  if (tournament) {
    return {
      props: JSON.parse(JSON.stringify(tournament)),
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tournaments = await prisma.tournaments.findMany({
    select: { id: true },
  });

  return {
    paths: tournaments.map((tournament) => ({
      params: { id: tournament.id },
    })),
    fallback: true,
  };
};
