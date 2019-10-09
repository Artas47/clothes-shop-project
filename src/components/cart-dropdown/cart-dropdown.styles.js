import styled from "styled-components";

export const CartDropdown = styled.div`
  position: absolute;
  width: 27rem;
  height: 35rem;
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
  overflow: scroll;
`;
