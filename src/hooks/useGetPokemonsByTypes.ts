import { useQuery } from "@tanstack/react-query";

import getPokemonsByTypes from "@/apis/getPokemonsByTypes";

export default function useGetPokemonsByTypes(name = '') {
  return useQuery({
    queryKey: ['get-pokemons-by-type', name],
    queryFn: async () => await getPokemonsByTypes(name),
    enabled: !!name
  });
}