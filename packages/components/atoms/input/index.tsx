import { useState } from 'react';

interface Props {
  label: string;
  className?: string;
  type: string;
  placeholder: string;
}

export function Input({ type, label, placeholder }: Props) {
  const [focused, setFocused] = useState(false);
  return (
    <div className='my-2 relative overflow-hidden'>
      <label
        htmlFor={type}
        className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
          focused ? 'from-five to-five' : 'from-gray-500 to-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        name={type}
        placeholder={placeholder}
        className='focus:outline-none p-2 appearance-none w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0'
        onFocus={() => setFocused(!focused)}
        onBlur={() => setFocused(false)}
      />
      <span
        className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-five to-five transition-all duration-300 ease-in transform ${
          focused ? 'w-full' : 'w-0'
        }`}
        aria-hidden='true'
      />
    </div>
  );
}
