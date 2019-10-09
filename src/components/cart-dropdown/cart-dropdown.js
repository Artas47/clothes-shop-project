import React from "react";
import CustomButton from "../custom-button/custom-button";
import * as S from "./cart-dropdown.styles";

const CartDropdown = () => {
  return (
    <S.CartDropdown>
      <div></div>
      <CustomButton style={{ marginTop: "auto" }}>GO TO CHECKOUT</CustomButton>
    </S.CartDropdown>
  );
};

export default CartDropdown;
