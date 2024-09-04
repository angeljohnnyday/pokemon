import { useQuery } from "@tanstack/react-query";

import getPokemons from "@/apis/getPokemons";

export default function useGetPokemons(offset: number) {
  return useQuery({
    queryKey: ['get-pokemons', offset],
    queryFn: async () => await getPokemons(offset),
  });
}