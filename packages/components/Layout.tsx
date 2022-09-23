import { ReactNode } from 'react';

import Navbar from '../components/NavBar';

import Container from './Container';

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <Container>
        <div className='flex flex-col justify-center'>{children}</div>
      </Container>
    </>
  );
}

export default Layout;
