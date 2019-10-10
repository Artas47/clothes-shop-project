import React from "react";
import * as S from "./cart-item.styles";

const CartItem = props => {
  return (
    <S.CartItem>
      <S.CartImg src={props.imageUrl} />
      <S.CartResume>
        {props.name} <br />
        {props.quantity} x {props.price}$
      </S.CartResume>
    </S.CartItem>
  );
};

export default CartItem;
