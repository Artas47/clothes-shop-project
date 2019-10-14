import React from "react";
import * as S from "./checkout-item.styles";
import { connect } from "react-redux";
import {
  clearCartItem,
  addCartItem,
  removeCartItem
} from "../../actions/index";

const CheckoutItem = props => {
  return (
    <S.CheckoutItem>
      <S.CheckoutItemImg src={props.imageUrl} />
      <S.CheckoutItemDescription>{props.name}</S.CheckoutItemDescription>
      <S.CheckoutItemQuantity>
        <S.CheckoutItemArrow onClick={() => props.removeCartItem(props.item)}>
          &#10094;
        </S.CheckoutItemArrow>
        <span>{props.quantity} </span>
        <S.CheckoutItemArrow onClick={() => props.addCartItem(props.item)}>
          &#10095;
        </S.CheckoutItemArrow>
      </S.CheckoutItemQuantity>
      <S.CheckoutItemPrice>{props.price}</S.CheckoutItemPrice>
      <S.CheckoutItemRemove onClick={() => props.clearCartItem(props.item)}>
        &#10005;
      </S.CheckoutItemRemove>
    </S.CheckoutItem>
  );
};

export default connect(
  null,
  { clearCartItem, removeCartItem, addCartItem }
)(CheckoutItem);
