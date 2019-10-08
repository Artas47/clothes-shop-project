import styled from "styled-components";
import { Field } from "redux-form";

export const FormField = styled.div`
  margin: 5rem 0;
`;

export const StyledLabel = styled.label``;
export const StyledField = styled(Field)`
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
