import styled from "styled-components/macro";
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
