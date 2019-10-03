import styled from "styled-components";

export const CollectionItem = styled.div`
  width: 22%;
  height: 50rem;
  display: flex;
  flex-direction: column;
`;

export const CollectionItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
  margin: 0.7rem 0;
`;

export const CollectionItemName = styled.div``;

export const CollectionItemPrice = styled.div`
  position: relative;
  :after {
    content: "$";
  }
`;
