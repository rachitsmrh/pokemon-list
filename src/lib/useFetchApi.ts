import { useState, useEffect } from "react";
import {
  AbilityDetails,
  PokemonDetails,
  PokemonListDetails,
  PokemonListResponse,
} from "./interface";

const fetchApi = async <T>(url: string): Promise<T | Error> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    return error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};

export const usePokemonList = (
  initialOffset = 0,
  limit = 20
): PokemonListDetails => {
  const [offset] = useState(initialOffset);
  const [allPokemonDetails, setAllPokemonDetails] = useState<PokemonDetails[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      const listResponse = await fetchApi<PokemonListResponse>(pokemonListUrl);
      if (listResponse instanceof Error) {
        console.error("Error fetching Pokemon list:", listResponse);
        setLoading(false);
        return;
      }
      const detailPromises = listResponse.results.map(async (pokemon) => {
        const pokemonDetails = await fetchApi<PokemonDetails>(pokemon.url);
        return pokemonDetails;
      });

      try {
        const newPokemonDetails = await Promise.all(detailPromises);
        const validDetails = newPokemonDetails.filter(
          (item): item is PokemonDetails => item !== null
        );

        setAllPokemonDetails((prev) => [...prev, ...validDetails]);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [offset, limit, pokemonListUrl]);

  return {
    pokemonDetails: allPokemonDetails,
    loading,
  };
};
export const useAbilityDetails = (url: string) => {
  const [abilityDetails, setAbilityDetails] = useState<AbilityDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAbilityDetails = async () => {
      setLoading(true);

      try {
        const listResponse = await fetchApi<AbilityDetails>(url);

        if (listResponse instanceof Error) {
          console.error("Error fetching ability details:", listResponse);
        } else {
          setAbilityDetails(listResponse);
        }
      } catch (error) {
        console.error("Error fetching ability details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchAbilityDetails();
    }
  }, [url]);

  return {
    abilityDetails,
    loading,
  };
};
