import React from "react";
import CustomButton from "../custom-button/custom-button";
import * as S from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item";
import { getCartItems } from "../../selectors/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  return (
    <S.CartDropdown>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map(item => {
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
        disabled={cartItems.length ? false : true}
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
        style={{ marginTop: "auto" }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </S.CartDropdown>
  );
};

export default withRouter(CartDropdown);
