import { ReactNode } from 'react';

import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
} 

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button 
      className={
        classNames('py-2 px-3 border rounded hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100', className)
      }
      { ...rest }
    >
      {children}
    </button>
  )
}
