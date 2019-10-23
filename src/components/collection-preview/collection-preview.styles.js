import styled from "styled-components";

export const CollectionPreview = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const CollectionPreviewTitle = styled.div`
  margin-top: 5rem;
  text-transform: uppercase;
  font-size: 5rem;
  margin-bottom: 2.5rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    margin-top: 0;
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 550px) {
    justify-content: center;
  }
`;
