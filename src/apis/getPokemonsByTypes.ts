'use server'

import { ResultType } from '@/types/pokemonType';
import axiosInstance from '@/utils/axios-conection';
import constants from '@/utils/constants';

export default async function getPokemonsBy(name: string) {
  const res = await axiosInstance(constants.POKEMON_BASE_URL).get<{ pokemon: { pokemon: ResultType }[] }>(
    `/type/${name}`, 
  );
  return res.data;
}