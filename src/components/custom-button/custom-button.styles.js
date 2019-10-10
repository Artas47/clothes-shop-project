import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  color: white;
  margin-top: 5rem;
  background-color: black;
  outline: none;
  transition: all 0.3s;
  width: 20rem;
  padding: 2.5rem 0;
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
  border: 3px solid white;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-right: 5rem;
  }

  :hover {
    border: 3px solid black;
    color: black;
    background-color: white;
  }

  background-color: ${props => (props.googleButton ? "green" : "")};

  ${props =>
    props.cartButton &&
    css`
      width: 80%;
      background-color: white;
      border: 2px solid black;
      font-size: 1.8rem;
      font-weight: 400;
      color: black;
      margin: 0;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      display: none;
      :hover {
        background-color: black;
        color: white;
      }
    `}
`;
