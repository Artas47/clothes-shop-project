import React from "react";
import * as S from "./header.styles";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

const Header = props => {
  return (
    <S.Header>
      <S.StyledLink style={{ marginRight: "auto" }} to="/">
        <S.StyledLogo />
      </S.StyledLink>
      <S.StyledLink to="/shop">SHOP</S.StyledLink>
      <S.StyledLink to="/contact">CONTACT</S.StyledLink>
      {props.user.email ? (
        <S.StyledLink
          to="#"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </S.StyledLink>
      ) : (
        <S.StyledLink to={"/signin"}>SIGN IN</S.StyledLink>
      )}
    </S.Header>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Header);
