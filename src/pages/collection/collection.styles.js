import styled from "styled-components";

export const Collection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CollectionNotFound = styled.div`
  font-size: 5rem;
  text-align: center;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20rem, 1fr));
  grid-gap: 3rem;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const CollectionTitle = styled.h2`
  text-align: center;
  font-size: 5rem;
  margin-top: 3rem;
  margin-bottom: 6rem;
  @media only screen and (max-width: 900px) {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;
