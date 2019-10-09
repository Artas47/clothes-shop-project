import React from "react";
import * as S from "./header.styles";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

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
      <CartIcon />
      {props.cartShow ? <CartDropdown /> : ""}
    </S.Header>
  );
};

const mapStateToProps = state => {
  return { user: state.user, cartShow: state.cartShow };
};

export default connect(mapStateToProps)(Header);
