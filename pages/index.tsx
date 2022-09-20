import { getSession, signOut, useSession } from 'next-auth/react';
import { Button } from '@material-tailwind/react';

import type { GetServerSideProps, NextPage } from 'next';

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1>{`Bem vindo ${session?.user?.name}`}</h1>
      <Button onClick={() => signOut()}>Logout</Button>
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
