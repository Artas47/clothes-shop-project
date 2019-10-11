import React from "react";
import CustomButton from "../custom-button/custom-button";
import * as S from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item";
import { getCartItems } from "../../selectors/cart.selector";
import { connect } from "react-redux";

const CartDropdown = props => {
  return (
    <S.CartDropdown>
      <S.CartItems>
        {props.cartItems.map(item => {
          return (
            <CartItem
              key={item.id}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </S.CartItems>
      <CustomButton style={{ marginTop: "auto" }}>GO TO CHECKOUT</CustomButton>
    </S.CartDropdown>
  );
};

const mapStateToProps = state => {
  return { cartItems: getCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
