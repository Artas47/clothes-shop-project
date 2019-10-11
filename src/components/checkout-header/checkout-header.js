import React from "react";
import * as S from "./checkout-header.styles";

const CheckoutHeader = () => {
  return (
    <S.CheckoutHeader>
      <S.CheckoutHeaderList>
        <S.CheckoutHeaderListItem a>Product</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem b>Description</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem c>Quantity</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem d>Price</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem e>Remove</S.CheckoutHeaderListItem>
      </S.CheckoutHeaderList>
    </S.CheckoutHeader>
  );
};

export default CheckoutHeader;
