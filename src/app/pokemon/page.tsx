'use client'

import React, { useCallback, useState } from 'react';

import { Button, PokemonList } from '@/components';
import useGetPokemons from '@/hooks/useGetPokemons'
import { extractOffset } from '@/utils/functions';

export default function Pokemon() {
  const [offset, setOffset] = useState(20);
  const { data, isFetching } = useGetPokemons(offset);

  const handlePrevious = useCallback(() => {
    if (!!data?.previous) setOffset(extractOffset(data.previous));
  }, [data]);

  const handleNext = useCallback(() => {
    if (!!data?.next) setOffset(extractOffset(data.next));
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <PokemonList
        isFetching={isFetching}
        data={data?.results ?? []}
      />
      {!isFetching && (
        <div className="flex gap-x-2 mt-7">
          <Button 
            onClick={handlePrevious}
            disabled={!data?.previous}
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!data?.next}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
