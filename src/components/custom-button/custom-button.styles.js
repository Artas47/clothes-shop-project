import styled from "styled-components";

export const CustomButton = styled.button`
  color: white;
  background-color: black;
  outline: none;
  transition: all 0.2s;
  width: 20rem;
  padding: 2.5rem 0;
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 100px;
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
`;
