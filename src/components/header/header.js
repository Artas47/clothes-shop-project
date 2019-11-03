import React from "react";
import * as S from "./header.styles";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { getUser } from "../../selectors/user.selector";
import { getCartHidden } from "../../selectors/cart.selector";
import { signOutStart } from "../../actions/index";

const Header = props => {
  return (
    <S.Header>
      <S.StyledLink style={{ marginRight: "auto" }} to="/">
        <S.StyledLogo />
      </S.StyledLink>
      <S.StyledLink to="/shop">SHOP</S.StyledLink>
      <S.StyledLink to="/contact">CONTACT</S.StyledLink>
      {props.user.currentUser ? (
        <S.StyledLink
          to="#"
          onClick={() => {
            props.signOutStart();
          }}
        >
          SIGN OUT
        </S.StyledLink>
      ) : (
        <S.StyledLink to={"/signin"}>SIGN IN</S.StyledLink>
      )}
      <CartIcon />
      {props.cartHidden ? <CartDropdown /> : ""}
    </S.Header>
  );
};

const mapStateToProps = state => {
  return { user: getUser(state), cartHidden: getCartHidden(state) };
};

export default connect(
  mapStateToProps,
  { signOutStart }
)(Header);
