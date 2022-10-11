interface Props {
  label: string;
  className?: string;
}

export function H2({ label, className }: Props) {
  return <h2 className={`text-lg font-semibold ${className}`}>{label}</h2>;
}

export function Separation({ label }: Props) {
  return (
    <div className='mx-3 flex items-center'>
      <span className='w-full h-px bg-gray-200' />
      <span className='mx-4 text-gray-300'>{label}</span>
      <span className='w-full h-px bg-gray-200' />
    </div>
  );
}
