export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonListItem[];
  next: string | null;
}
export interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_shiny: string;
  };
  base_experience: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
  }>;
}
export interface PokemonListDetails {
  pokemonDetails: PokemonDetails[];
  loading: boolean;
}

export interface PokemonCardProps {
  pokemon: PokemonDetails;
}

export interface AbilityDetails {
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
    };
  }>;
}
