import React from "react";
import * as S from "./checkout-item.styles";

const CheckoutItem = props => {
  return (
    <S.CheckoutItem>
      <S.CheckoutItemImg src={props.imageUrl} />
      <S.CheckoutItemDescription>{props.name}</S.CheckoutItemDescription>
      <S.CheckoutItemQuantity>{props.quantity}</S.CheckoutItemQuantity>
      <S.CheckoutItemPrice>{props.price}</S.CheckoutItemPrice>
      <S.CheckoutItemRemove>X</S.CheckoutItemRemove>
    </S.CheckoutItem>
  );
};

export default CheckoutItem;
