import {
  Button,
  Card,
  CardBody,
  Checkbox,
  IconButton,
  Input,
  Typography,
} from '@material-tailwind/react';
import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { FormEvent } from 'react';

import Facebook from '../packages/icons/Facebook';
import Github from '../packages/icons/Github';
import Google from '../packages/icons/Google';

const Login: NextPage = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn('credentials');
  };
  return (
    <div className='flex flex-col justify-center min-h-screen'>
      <Card className='mx-auto w-80 sm:w-96'>
        <CardBody className='flex flex-col gap-4'>
          <Typography variant='h2' className='pb-8 text-center' color='black'>
            Welcome back
          </Typography>

          <Input label='Email' size='lg' />
          <Input label='Password' size='lg' />
          <div className='flex flex-col sm:flex-row items-center justify-between mb-4'>
            <Checkbox label='Remember Me' />
            <Typography
              as='a'
              href='#signup'
              variant='small'
              color='blue'
              className='font-bold'
            >
              Forgot your password?
            </Typography>
          </div>
          <Button color='light-blue' onClick={onSubmit}>
            Sign in
          </Button>

          <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
            <p className='text-center font-semibold mx-4 mb-0'>Or</p>
          </div>

          <div className='flex justify-around'>
            <IconButton
              size='lg'
              variant='text'
              onClick={() => signIn('github')}
            >
              <Github />
            </IconButton>
            <IconButton size='lg' variant='text'>
              <Google />
            </IconButton>
            <IconButton size='lg' variant='text'>
              <Facebook />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
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

export default Login;
