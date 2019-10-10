import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const CartImg = styled.img`
  width: 40%;
  margin-right: 2rem;
`;

export const CartResume = styled.div`
  font-size: 2rem;
`;
