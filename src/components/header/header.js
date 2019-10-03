import React from "react";
import * as S from "./header.styles";

const Header = () => {
  return (
    <S.Header>
      <S.StyledLink style={{ marginRight: "auto" }} to="/">
        <S.StyledLogo />
      </S.StyledLink>
      <S.StyledLink to="/shop">SHOP</S.StyledLink>
      <S.StyledLink to="/contact">CONTACT</S.StyledLink>
      <S.StyledLink to="/signin">SIGN IN</S.StyledLink>
    </S.Header>
  );
};

export default Header;
