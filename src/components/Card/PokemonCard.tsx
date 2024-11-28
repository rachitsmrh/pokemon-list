"use client";
import React from "react";

import { PokemonCardProps } from "@/lib/interface";
import {
  AbilityList,
  Card,
  ClickableAbility,
  PokemonImage,
  PokemonInfo,
  PokemonName,
} from "./PokemonCard.styles";

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card>
      <PokemonImage
        src={pokemon.sprites.front_shiny}
        alt={`${pokemon.name} shiny sprite`}
      />
      <PokemonName>{pokemon.name}</PokemonName>

      <PokemonInfo>
        <span>
          Experience: {pokemon.base_experience} | Weight: {pokemon.weight}
        </span>
      </PokemonInfo>

      <AbilityList>
        {pokemon.abilities.map((ability, index) => (
          <React.Fragment key={ability.ability.name + pokemon.name}>
            <ClickableAbility href={`/ability/${ability.ability.name}`}>
              {ability.ability.name}
            </ClickableAbility>
            {index < pokemon.abilities.length - 1 && "|"}
          </React.Fragment>
        ))}
      </AbilityList>
    </Card>
  );
};
