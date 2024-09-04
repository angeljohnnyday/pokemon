import { useQuery } from "@tanstack/react-query";

import getPokemonByName from "@/apis/getPokemonByName";

export default function useGetPokemonByName(name = '') {
  return useQuery({
    queryKey: ['get-pokemon-by-name', name],
    queryFn: async () => await getPokemonByName(name),
    enabled: !!name
  });
}