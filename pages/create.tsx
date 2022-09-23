import { GetServerSideProps, NextPage } from 'next';
import { Button, Input, Typography } from '@material-tailwind/react';
import { getSession } from 'next-auth/react';

import Layout from '../packages/components/Layout';

const Create: NextPage = () => {
  const addHome = () => null;

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center gap-y-8'>
        <Typography variant='h3' color='white'>
          Cadastre aqui o torneio
        </Typography>
        <div className='lg:w-2/5 bg-white rounded-lg grid grid-cols-1 gap-4 p-8'>
          <Input label='Torneio' variant='standard' />
          <Input
            label='Data'
            variant='standard'
            type='datetime-local'
            className='fill-white'
          />
          <Input label='Buy-in' variant='standard' />
          <Button onClick={() => addHome}>Salvar</Button>
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
