'use server'

import { PokemonFormType } from '@/types/pokemonType';
import axiosInstance from '@/utils/axios-conection';
import constants from '@/utils/constants';

export default async function getPokemonFormByName(name: string) {
  const res = await axiosInstance(constants.POKEMON_BASE_URL).get<PokemonFormType>(
    `/pokemon-form/${name}`, 
  );
  return res.data;
}