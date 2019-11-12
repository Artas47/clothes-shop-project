import React from "react";
import * as S from "./cart-icon.styles";
import { connect } from "react-redux";
import { toggleCart } from "../../actions/index";
import { getCartItemsQuantity } from "../../selectors/cart.selector";

const CartIcon = props => {
  return (
    <S.CartIcon onClick={props.toggleCart}>
      <S.StyledShoppingCart />
      <S.ItemCount>{props.cartItemQuantity}</S.ItemCount>
    </S.CartIcon>
  );
};

const mapStateToProps = state => {
  return {
    cartItemQuantity: getCartItemsQuantity(state)
  };
};

export default connect(mapStateToProps, { toggleCart })(CartIcon);
