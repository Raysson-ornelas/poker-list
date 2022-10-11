import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  label?: string;
}

export function Button({ label }: Props) {
  return (
    <button className='w-full flex justify-center mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white font-semibold uppercase tracking-widest bg-five hover:bg-five/70'>
      {label}
    </button>
  );
}

export function SocialButton({ children }: Props) {
  return <button>{children}</button>;
}
