import styled from "styled-components";

export const FormField = styled.input`
  display: block;
  border: none;
  font-size: 3rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 1rem;
  width: 100%;
  margin: 1rem 0;

  :focus {
    outline: none;
  }
`;
