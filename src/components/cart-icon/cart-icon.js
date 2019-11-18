import React from "react";
import * as S from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../actions/index";
import { getCartItemsQuantity } from "../../selectors/cart.selector";

const CartIcon = () => {
  const cartItemQuantity = useSelector(getCartItemsQuantity);
  const dispatch = useDispatch();
  return (
    <S.CartIcon
      onClick={() => {
        dispatch(toggleCart());
      }}
    >
      <S.StyledShoppingCart />
      <S.ItemCount>{cartItemQuantity}</S.ItemCount>
    </S.CartIcon>
  );
};

export default CartIcon;
