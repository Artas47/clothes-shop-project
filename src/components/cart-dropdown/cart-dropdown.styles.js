import styled from "styled-components";

export const CartDropdown = styled.div`
  position: absolute;
  width: 32rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 10rem;
  right: 7rem;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 1.5rem;
`;
