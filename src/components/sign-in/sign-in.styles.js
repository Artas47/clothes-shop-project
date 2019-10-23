import styled from "styled-components/macro";
import CustomButton from "../custom-button/custom-button";

export const SignIn = styled.div`
  font-size: 3rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const FormCustomButton = styled(CustomButton)`
  @media only screen and (max-width: 450px) {
    width: 100%;
    margin: 0;
  }
`;

export const StyledForm = styled.form`
  margin-top: 7rem;
`;
