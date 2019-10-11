import styled from "styled-components";

export const CheckoutItem = styled.div`
  font-size: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const CheckoutItemImg = styled.img`
  width: 20rem;
  height: 23rem;
  grid-column: 1/2;
`;
export const CheckoutItemDescription = styled.div`
  grid-column: 2/3;
`;
export const CheckoutItemQuantity = styled.div`
  grid-column: 3/4;
`;
export const CheckoutItemPrice = styled.div`
  grid-column: 4/5;
`;
export const CheckoutItemRemove = styled.div`
  grid-column: 5/6;
`;
