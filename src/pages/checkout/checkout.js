import React from "react";
import CheckoutHeader from "../../components/checkout-header/checkout-header";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { getCartTotalPrice, getCartItems } from "../../selectors/cart.selector";
import { useSelector } from "react-redux";
import StripeButton from "../../components/stripe-button/stripe-button";
import * as S from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(getCartItems);
  const total = useSelector(getCartTotalPrice);
  return (
    <S.Checkout>
      <CheckoutHeader />
      <S.CheckoutItems>
        {cartItems.map(item => {
          return (
            <CheckoutItem
              key={item.id}
              item={item}
              imageUrl={item.imageUrl}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
            />
          );
        })}
      </S.CheckoutItems>
      <S.CheckoutTotalPrice>
        TOTAL PRICE:
        {total}
      </S.CheckoutTotalPrice>
      <S.CheckoutWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp 01/20 - CVS: 123
      </S.CheckoutWarning>
      <StripeButton price={total} />
    </S.Checkout>
  );
};

export default Checkout;
