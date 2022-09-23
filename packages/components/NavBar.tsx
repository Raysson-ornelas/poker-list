import {
  Avatar,
  Button,
  IconButton,
  MobileNav,
  Typography,
} from '@material-tailwind/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Container from './Container';

function NavBar() {
  const { data: session } = useSession();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white'>
      <Typography as='li' variant='small' className='p-1 font-normal'>
        <Link href='/create' className='flex items-center'>
          Create Tournament
        </Link>
      </Typography>
      <Typography as='li' variant='small' className='p-1 font-normal'>
        <a href='#' className='flex items-center'>
          Account
        </a>
      </Typography>
      <Typography as='li' variant='small' className='p-1 font-normal'>
        <a href='#' className='flex items-center'>
          Blocks
        </a>
      </Typography>
      <Typography as='li' variant='small' className='p-1 font-normal'>
        <a href='#' className='flex items-center'>
          Docs
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className='mx-auto w-full py-2 lg:py-4'>
      <Container>
        <div className='mx-auto flex items-center justify-between text-white '>
          <Typography
            variant='small'
            className='mr-4 cursor-pointer py-1.5 font-normal'
          >
            <Link href='/'>Poker List</Link>
          </Typography>

          <div className='hidden lg:block'>{navList}</div>

          <div className='hidden lg:flex lg:flex-col'>
            <Avatar
              src={session?.user?.image ?? ''}
              alt='avatar'
              variant='circular'
            />
            <Typography
              as='a'
              href='/login'
              variant='small'
              className='mr-4 cursor-pointer py-1.5 font-normal'
              onClick={() => signOut()}
            >
              <span>Logout</span>
            </Typography>
          </div>

          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </Container>
      <MobileNav open={openNav}>
        {navList}
        <Button variant='gradient' size='sm' fullWidth className='mb-2'>
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </div>
  );
}

export default NavBar;
