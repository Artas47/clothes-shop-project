import React from "react";
import CheckoutHeader from "../../components/checkout-header/checkout-header";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { getCartTotalPrice, getCartItems } from "../../selectors/cart.selector";
import { connect } from "react-redux";
import StripeButton from "../../components/stripe-button/stripe-button";
import * as S from "./checkout.styles";

const Checkout = props => {
  return (
    <S.Checkout>
      <CheckoutHeader />
      <S.CheckoutItems>
        {props.cartItems.map(item => {
          return (
            <CheckoutItem
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
        {props.total}
      </S.CheckoutTotalPrice>
      <S.CheckoutWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp 01/20 - CVS: 123
      </S.CheckoutWarning>
      <StripeButton price={props.total} />
    </S.Checkout>
  );
};

const mapStateToProps = state => {
  return { cartItems: getCartItems(state), total: getCartTotalPrice(state) };
};

export default connect(mapStateToProps)(Checkout);
