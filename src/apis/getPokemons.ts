'use server'

import { PokemonsResultType } from '@/types/pokemonType';
import axiosInstance from '@/utils/axios-conection';
import constants from '@/utils/constants';

export default async function getPokemons(offset: number) {
  const res = await axiosInstance(constants.POKEMON_BASE_URL).get<PokemonsResultType>(
    '/pokemon', 
    {
      params: { offset }
    }
  );
  return res.data;
}