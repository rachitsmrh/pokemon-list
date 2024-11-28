"use client";
import { usePokemonList } from "@/lib/useFetchApi";
import { Page, Heading, CardContainer } from "./page.styles";
import { PokemonCard } from "@/components/Card/PokemonCard";

const Home = () => {
  const { pokemonDetails } = usePokemonList();
  return (
    <Page>
      <Heading>Welcome to Pokemon List</Heading>
      <CardContainer>
        {pokemonDetails.map((pokemon) => (
          <PokemonCard key={pokemon.name + pokemon.id} pokemon={pokemon} />
        ))}
      </CardContainer>
    </Page>
  );
};

export default Home;
