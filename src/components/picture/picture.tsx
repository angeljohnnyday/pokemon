import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface PictureProps {
  name: string;
  src: string;
  width: number;
  height: number;
}

export default function Picture({ name, src, width, height }: PictureProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={`Image of ${name}`}
      width={width}
      height={height}
      className={classNames({
        'transition-transform': isLoaded,
        'duration-300': isLoaded,
        'hover:scale-125':  isLoaded,
      })}
      onLoadingComplete={(img) => setIsLoaded(true)}
    />
  )
}
