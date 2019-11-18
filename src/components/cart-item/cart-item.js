import React from "react";
import * as S from "./cart-item.styles";

const CartItem = ({ imageUrl, name, quantity, price }) => {
  return (
    <S.CartItem>
      <S.CartImg src={imageUrl} />
      <S.CartResume>
        {name} <br />
        {quantity} x {price}$
      </S.CartResume>
    </S.CartItem>
  );
};

export default CartItem;
