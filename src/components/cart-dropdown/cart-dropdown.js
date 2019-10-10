import React from "react";
import CustomButton from "../custom-button/custom-button";
import * as S from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";

const CartDropdown = props => {
  return (
    <S.CartDropdown>
      <S.CartItems>
        {props.cartItems.map(item => {
          return (
            <CartItem key={item.id} name={item.name} imageUrl={item.imageUrl} />
          );
        })}
      </S.CartItems>
      <CustomButton style={{ marginTop: "auto" }}>GO TO CHECKOUT</CustomButton>
    </S.CartDropdown>
  );
};

const mapStateToProps = state => {
  return { cartItems: Object.values(state.cart.cartItems) };
};

export default connect(mapStateToProps)(CartDropdown);
