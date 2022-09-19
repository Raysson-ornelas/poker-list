import { Children, ReactNode } from 'react';
import Container from './Container';

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <div className='bg-gradient-to-r from-blue-gray-900 to-blue-gray-500'>
      <Container>
        <div className='flex flex-col justify-center'>{children}</div>
      </Container>
    </div>
  );
}

export default Layout;
