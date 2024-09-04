export interface ResultType {
  name: string;
  url: string;
}

export interface PokemonsResultType {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultType[];
}

interface AbilityType {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  }
}

export interface PokemonType {
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  weight: number;
  height: number;
  abilities: AbilityType[];
}

export interface PokemonFormType {
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    },
  }[];
}