import { ReactNode } from 'react';

import Navbar from '../components/organisms/navbar/NavBar';
import { Container } from '../components/atoms/container';

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
