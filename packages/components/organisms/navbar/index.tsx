import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Container } from '../../atoms/container';
import Logo from '../../atoms/icons/Logo';

export default function NavBar() {
  const { data: session } = useSession();
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className='mx-auto w-full p-4 border-b'>
      <Container>
        <div className='mx-auto flex items-center justify-between text-white '>
          <Link href='/'>
            <div>
              <Logo />
            </div>
          </Link>
          <div className='flex justify-center items-center gap-4'>
            <Link href='/create'> + Tournament</Link>
            <div className='relative' onClick={() => setOpenNav(!openNav)}>
              <Image
                src={session?.user?.image ?? ''}
                alt='you'
                height={40}
                width={40}
                className='rounded-full'
              />
              <div
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  openNav ? '' : 'hidden'
                }`}
              >
                <a href='#' className='block px-4 py-2 text-sm text-gray-700'>
                  Your Profile
                </a>
                <a href='#' className='block px-4 py-2 text-sm text-gray-700'>
                  Settings
                </a>
                <button
                  onClick={() => signOut()}
                  className='block px-4 py-2 text-sm text-gray-700'
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
