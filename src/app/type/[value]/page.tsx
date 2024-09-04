'use client'

import React, { useMemo } from 'react'

import { Button, PokemonList } from '@/components';
import useGetPokemonsByTypes from '@/hooks/useGetPokemonsByTypes'
import { useRouter } from 'next/navigation';

interface PokemonByTypesProps {
    params: { value: string }
  }
  

export default function PokemonByTypes({ params: { value } }: PokemonByTypesProps) {
  const router = useRouter();
  const { data, isFetching } = useGetPokemonsByTypes(value);

  const pokemons = useMemo(() => {
    if (!!data) return data.pokemon.map((row) => row.pokemon) 
    return [];
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        className="my-4"
        onClick={() => router.push('/pokemon')}
      >
        See all pokemos
      </Button>
      <PokemonList
        isFetching={isFetching}
        data={pokemons}
      />
    </div>
  )
}
