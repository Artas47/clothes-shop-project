import styled from "styled-components";

export const Checkout = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  justify-content: center;
  text-align: center;
`;

export const CheckoutTotalPrice = styled.h2`
  font-size: 3rem;
  text-align: right;
  position: relative;
  :after {
    content: "$";
  }
`;

export const CheckoutItems = styled.div``;

export const CheckoutWarning = styled.div`
  font-size: 2rem;
  color: red;
`;
