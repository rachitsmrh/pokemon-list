import styled from "styled-components";
import Link from "next/link";
export const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
  text-align: center;
  color: #333;
`;

export const PokemonInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const AbilityList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ClickableAbility = styled(Link)`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    opacity: 0.7;
  }
`;
