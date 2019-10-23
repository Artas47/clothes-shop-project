import styled from "styled-components";

export const SignInAndSignUp = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 7rem;
  flex-wrap: wrap;
  flex: 1 1 50%;
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
