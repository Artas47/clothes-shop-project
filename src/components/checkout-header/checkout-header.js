import React from "react";
import * as S from "./checkout-header.styles";

const CheckoutHeader = () => {
  return (
    <S.CheckoutHeader>
      <S.CheckoutHeaderList>
        <S.CheckoutHeaderListItem>Product</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem>Description</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem>Quantity</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem>Price</S.CheckoutHeaderListItem>
        <S.CheckoutHeaderListItem>Remove</S.CheckoutHeaderListItem>
      </S.CheckoutHeaderList>
    </S.CheckoutHeader>
  );
};

export default CheckoutHeader;
