import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
      <div className='bg-three flex flex-col gap-y-4 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-full max-w-md'>
        {children}
      </div>
    </div>
  );
}
