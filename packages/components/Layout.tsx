import { ReactNode } from 'react';

import Container from './Container';

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <div className='bg-blue-gray-900 min-h-screen'>
      <Container>
        <div className='flex flex-col justify-center'>{children}</div>
      </Container>
    </div>
  );
}

export default Layout;
