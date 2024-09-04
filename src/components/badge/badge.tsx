import classNames from 'classnames';
import React from 'react'

interface BadgeProps {
  values: string[];
  className?: string;
  onClick?: (value: string) => void
}

export default function Badge({ values, className, onClick }: BadgeProps) {
  return (
    <div className="flex gap-x-3">
      {values.map((value, index) => (
        <div 
          key={index} 
          className={classNames('rounded px-3', className, { 'cursor-pointer': !!onClick })}
          onClick={() => {
            if (!!onClick) onClick(value);
          }}
        >
          {value}
        </div>
      ))}
    </div>
  )
}
