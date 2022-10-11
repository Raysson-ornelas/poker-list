import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Container(props: Props) {
  const { children } = props;

  return (
    <div className='mx-auto max-w-sm sm:max-w-2xl lg:max-w-7xl px-4'>
      {children}
    </div>
  );
}
