import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: Omit<Props, 'children'>) {
  return (
    <button
      className='w-full flex justify-center mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white font-semibold uppercase tracking-widest bg-five hover:bg-five/70'
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function SocialButton({ children, onClick }: Omit<Props, 'label'>) {
  return <button onClick={onClick}>{children}</button>;
}
