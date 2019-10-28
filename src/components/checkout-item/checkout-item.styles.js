import styled from "styled-components";

export const CheckoutItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25rem repeat(4, minmax(10rem, 20rem));
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: 15rem repeat(4, minmax(5rem, 1fr));
  }
  :not(:last-child) {
    margin: 3rem 0;
  }

  :first-child {
    border-top: 2px solid darkgrey;
    padding-top: 3rem;
  }
  :last-child {
    border-bottom: 2px solid darkgrey;
    padding-bottom: 3rem;
  }
`;

export const CheckoutItemImg = styled.img`
  width: 20rem;
  height: 23rem;
  grid-column: 1/2;
  @media only screen and (max-width: 1300px) {
    width: 17rem;
    height: 20rem;
  }
  @media only screen and (max-width: 700px) {
    width: 14rem;
    height: 17rem;
  }
`;
export const CheckoutItemDescription = styled.div`
  grid-column: 2/3;
`;
export const CheckoutItemQuantity = styled.div`
  grid-column: 3/4;
  display: flex;
  align-items: center;
`;
export const CheckoutItemPrice = styled.div`
  grid-column: 4/5;
  :after {
    content: "$";
  }
`;
export const CheckoutItemRemove = styled.div`
  grid-column: 5/6;
`;

export const CheckoutItemArrow = styled.div`
  margin: 0 0.5rem;
  font-size: 1.7rem;
  cursor: pointer;
`;
