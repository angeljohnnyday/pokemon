import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Picture, Skeleton } from '@/components';
import { ResultType } from '@/types/pokemonType';
import { extractId, getImageUrl } from '@/utils/functions';

interface PokemonListProps {
  isFetching: boolean;
  data: ResultType[];
}

export default function PokemonList({ isFetching, data }: PokemonListProps) {
  const router = useRouter();

  const pokemons = useMemo(() => {
    if (!!data) {
      return data.map(({ name, url }) => {
        const id = extractId(url);
        return {
          id,
          name,
          image: getImageUrl(id),
        };
      });
    }
    return [];
  }, [data]);
  return (
    <div className="grid grid-cols-4 gap-2 w-6/12">
        {isFetching ? (
          <Skeleton repeat={20}/>
        ) : (
          <>
            {pokemons.map(({ id, name, image }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center cursor-pointer bg-gray-50"
                onClick={() => router.push(`/pokemon/${name}`)}
              >
                <Picture
                  src={image}
                  name={name}
                  width={100}
                  height={150}
                />
                <div className="text-lg ">
                  {name}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
  )
}
