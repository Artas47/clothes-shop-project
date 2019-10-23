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
  @media only screen and (max-width: 1200px) {
    right: 5rem;
  }
  @media only screen and (max-width: 850px) {
    right: 3rem;
  }
  @media only screen and (max-width: 450px) {
    right: 1.5rem;
  }
`;

export const CartItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 1.5rem;
`;

export const CartEmpty = styled.div`
  color: #9fa8b5;
  text-align: center;
`;
