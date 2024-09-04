import { useQuery } from "@tanstack/react-query";

import getPokemonFormByName from "@/apis/getPokemonFormByName";

export default function useGetPokemonFormByName(name = '') {
  return useQuery({
    queryKey: ['get-pokemon-form-by-name', name],
    queryFn: async () => await getPokemonFormByName(name),
    enabled: !!name
  });
}