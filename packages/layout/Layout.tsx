import { ReactNode } from 'react';

import { Container } from '../components/atoms/container';
import NavBar from '../components/organisms/navbar';

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <NavBar />
      <Container>
        <div className='flex flex-col justify-center'>{children}</div>
      </Container>
    </>
  );
}

export default Layout;
