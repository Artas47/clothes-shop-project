import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const Header = styled.div`
  font-size: 3rem;
  height: 10rem;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const HeaderItems = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  :not(:last-child) {
    padding: 0 3rem;
    @media only screen and (max-width: 550px) {
      padding: 0 2rem;
    }
    @media only screen and (max-width: 450px) {
      padding: 0 1.5rem;
    }
    @media only screen and (max-width: 400px) {
      padding: 0 1rem;
    }
  }
`;

export const StyledLogo = styled(Logo)``;
