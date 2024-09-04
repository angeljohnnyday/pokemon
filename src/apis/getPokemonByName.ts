'use server'

import { PokemonType } from '@/types/pokemonType';
import axiosInstance from '@/utils/axios-conection';
import constants from '@/utils/constants';

export default async function getPokemonByName(name: string) {
  const res = await axiosInstance(constants.POKEMON_BASE_URL).get<PokemonType>(
    `/pokemon/${name}`, 
  );
  return res.data;
}