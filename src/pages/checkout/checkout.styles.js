import styled from "styled-components";

export const Checkout = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const CheckoutTotalPrice = styled.h2`
  text-align: right;
  position: relative;
  :after {
    content: "$";
  }
`;

export const CheckoutItems = styled.div``;

export const CheckoutWarning = styled.div`
  color: red;
`;
