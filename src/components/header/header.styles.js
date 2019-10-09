import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const Header = styled.div`
  width: 100%;
  font-size: 3rem;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderItems = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 1rem;
  :not(:last-child) {
    padding: 0 3rem;
  }
`;

export const StyledLogo = styled(Logo)`
  fill: #e3e3e3;
`;
