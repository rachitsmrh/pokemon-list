"use client";
import React from "react";
import styled from "styled-components";
import { useAbilityDetails } from "@/lib/useFetchApi";
import { Heading, Page } from "@/app/page.styles";

const AbilityContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const AbilityName = styled.h1`
  text-transform: capitalize;
  text-align: center;
  color: #333;
`;

const FlavorText = styled.p`
  line-height: 1.6;
  color: #666;
`;

const LoadingText = styled.div`
  text-align: center;
  color: #888;
`;

const AbilityDetailsPage = ({ params }: { params: { name: string } }) => {
  const abilityUrl = `https://pokeapi.co/api/v2/ability/${34}`;
  const { abilityDetails, loading } = useAbilityDetails(abilityUrl);

  if (loading) return <LoadingText>Loading ability details...</LoadingText>;
  const englishFlavorText = abilityDetails?.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  )?.flavor_text;

  return (
    <Page>
      <Heading>Welcome to Pokemon List</Heading>
      <AbilityContainer>
        <AbilityName>{params.name}</AbilityName>
        {/* {abilityDetails?.flavor_text_entries.map((flavorText) => (
          <FlavorText key={flavorText.flavor_text}>
            {flavorText.flavor_text}
          </FlavorText>
        ))} */}
        <FlavorText>{englishFlavorText}</FlavorText>
      </AbilityContainer>
    </Page>
  );
};

export default AbilityDetailsPage;
