'use client'

import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Badge, Button, Skeleton } from '@/components';
import useGetPokemonFormByName from '@/hooks/useGetPokemonFormByName';
import useGetPokemonByName from '@/hooks/useGetPokemonByName';
import { getImageUrl } from '@/utils/functions';

interface PokemonDetailsProps {
  params: { value: string }
}

export default function PokemonDetails({ params: { value } }: PokemonDetailsProps) {
  const { data: pokemon, isFetching: isFetchingPokemon } = useGetPokemonByName(value);
  const { data: pokemonForm, isFetching: isFetchingPokForm } = useGetPokemonFormByName(value);
  const router = useRouter();

  const abilities = useMemo(() => {
    if (!!pokemon) {
      return pokemon.abilities.map(({ ability: { name } }) => name);
    }
    return [];
  }, [pokemon]);

  const types = useMemo(() => {
    if (!!pokemonForm) {
      return pokemonForm.types.map(({ type: { name } }) => name);
    }
    return [];
  }, [pokemonForm]);

  const isFetching = useMemo(() => {
    return isFetchingPokemon && isFetchingPokForm;
  }, [isFetchingPokemon, isFetchingPokForm])

  return (
    <>
      {(isFetching) && (
        <div className="h-56 mt-4">
          <Skeleton repeat={1}/>
        </div>
      )}
      {(!!pokemon && !isFetching) && (
        <div className="flex flex-col gap-y-4 w-full items-center justify-center mt-4">
          <div className="text-xl">
            {pokemon.name} #{pokemon.order}
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-6/12">
            <div className="border bg-gray-50 rounded">
              <Image
                  src={getImageUrl(pokemon.id.toString())}
                  alt={`Image of ${pokemon.name}`}
                  width={200}
                  height={350}
                  layout="intrinsic"
                />
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-5">
                <div>
                  Height
                  <Badge 
                    className="border rounded" 
                    values={[`${pokemon.height / 10} m`]} 
                  />
                </div>
                <div>
                  Weight
                  <Badge values={[`${pokemon.weight / 10} kg`]} className="border rounded" />
                </div>
              </div>
              <div>
                Abilities
                <Badge 
                  values={abilities} 
                  className="bg-slate-500 text-white"
                />
              </div>
              <div>
                Types
                <Badge 
                  values={types}
                  className="bg-amber-200 text-black"
                  onClick={(value) => {
                    router.push(`/type/${value}`);
                  }}
                />
              </div>
            </div>
          </div>
          <Button onClick={() => router.back()}>
            Go back
          </Button>
        </div>
      )}
    </>
  )
}
