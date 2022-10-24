import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

import { Container } from '../../atoms/container';

export default function NavBar() {
  const { data: session } = useSession();
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className='mx-auto w-full py-2 lg:py-4'>
      <Container>
        <div className='mx-auto flex items-center justify-between text-white '>
          {session?.user?.name}
          <button onClick={() => signOut()}>Login</button>
        </div>
      </Container>
    </div>
  );
}