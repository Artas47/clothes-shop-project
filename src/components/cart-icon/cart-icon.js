import React from "react";
import * as S from "./cart-icon.styles";
import { connect } from "react-redux";
import { toggleCart } from "../../actions/index";

const CartIcon = props => {
  return (
    <S.CartIcon onClick={props.toggleCart}>
      <S.StyledShoppingCart />
      <S.ItemCount>0</S.ItemCount>
    </S.CartIcon>
  );
};

export default connect(
  null,
  { toggleCart }
)(CartIcon);
