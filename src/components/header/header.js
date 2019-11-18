import React from "react";
import * as S from "./header.styles";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { getUser } from "../../selectors/user.selector";
import { getCartHidden } from "../../selectors/cart.selector";
import { signOutStart } from "../../actions/index";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const cartHidden = useSelector(getCartHidden);
  return (
    <S.Header>
      <S.StyledLink style={{ marginRight: "auto" }} to="/">
        <S.StyledLogo />
      </S.StyledLink>
      <S.StyledLink to="/shop">SHOP</S.StyledLink>
      <S.StyledLink to="/contact">CONTACT</S.StyledLink>
      {user.currentUser ? (
        <S.StyledLink
          to="#"
          onClick={() => {
            dispatch(signOutStart());
          }}
        >
          SIGN OUT
        </S.StyledLink>
      ) : (
        <S.StyledLink to={"/signin"}>SIGN IN</S.StyledLink>
      )}
      <CartIcon />
      {cartHidden ? <CartDropdown /> : ""}
    </S.Header>
  );
};

export default Header;
