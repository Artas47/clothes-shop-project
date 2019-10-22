import styled from "styled-components";

export const Collection = styled.div`
  width: 100%;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const CollectionTitle = styled.h2`
  text-align: center;
  font-size: 5rem;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;
