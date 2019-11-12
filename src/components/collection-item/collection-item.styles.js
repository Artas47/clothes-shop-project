import styled from "styled-components";
import { CustomButton } from "../custom-button/custom-button.styles";

export const CollectionItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;
export const CollectionItem = styled.div`
  width: 22vw;
  height: 50rem;
  display: flex;
  position: relative;
  flex-direction: column;
  transition: all 0.2s;

  @media only screen and (max-width: 1600px) {
    margin: 1rem;
    width: 20vw;
  }
  @media only screen and (max-width: 900px) {
    width: 40vw;
  }
  @media only screen and (max-width: 550px) {
    width: 80vw;
    height: 40rem;
  }

  :hover {
    opacity: 0.8;
    ${CustomButton} {
      display: block;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const CollectionItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
  margin: 0.7rem 0;
`;

export const CollectionItemPrice = styled.div`
  position: relative;
  :after {
    content: "$";
  }
`;

export const CollectionItemName = styled.div``;
