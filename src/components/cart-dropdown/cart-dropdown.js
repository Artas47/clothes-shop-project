import React from "react";
import CustomButton from "../custom-button/custom-button";
import * as S from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item";
import { getCartItems } from "../../selectors/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../actions/index";
import { connect } from "react-redux";

const CartDropdown = props => {
  return (
    <S.CartDropdown>
      <S.CartItems>
        {props.cartItems.length ? (
          props.cartItems.map(item => {
            return (
              <CartItem
                key={item.id}
                price={item.price}
                name={item.name}
                quantity={item.quantity}
                imageUrl={item.imageUrl}
              />
            );
          })
        ) : (
          <S.CartEmpty>Cart is empty</S.CartEmpty>
        )}
      </S.CartItems>
      <CustomButton
        onClick={() => {
          props.history.push("/checkout");
          props.toggleCart();
        }}
        style={{ marginTop: "auto" }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </S.CartDropdown>
  );
};

const mapStateToProps = state => {
  return { cartItems: getCartItems(state) };
};

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCart }
  )(CartDropdown)
);
