import React from "react";
import * as S from "./checkout-item.styles";
import { useDispatch } from "react-redux";
import {
  clearCartItem,
  addCartItem,
  removeCartItem
} from "../../actions/index";

const CheckoutItem = ({ imageUrl, name, item, quantity, price }) => {
  const dispatch = useDispatch();
  return (
    <S.CheckoutItem>
      <S.CheckoutItemImg src={imageUrl} />
      <S.CheckoutItemDescription>{name}</S.CheckoutItemDescription>
      <S.CheckoutItemQuantity>
        <S.CheckoutItemArrow onClick={() => dispatch(removeCartItem(item))}>
          &#10094;
        </S.CheckoutItemArrow>
        <span>{quantity} </span>
        <S.CheckoutItemArrow onClick={() => dispatch(addCartItem(item))}>
          &#10095;
        </S.CheckoutItemArrow>
      </S.CheckoutItemQuantity>
      <S.CheckoutItemPrice>{price}</S.CheckoutItemPrice>
      <S.CheckoutItemRemove onClick={() => dispatch(clearCartItem(item))}>
        &#10005;
      </S.CheckoutItemRemove>
    </S.CheckoutItem>
  );
};

export default CheckoutItem;
