import styled from "styled-components";

export const Heading = styled.h1``;
export const Page = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100svh;
  padding: 40px;
  font-family: var(--font-geist-sans);
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
