import React from "react";
import CheckoutHeader from "../../components/checkout-header/checkout-header";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { connect } from "react-redux";
import * as S from "./checkout.styles";

const Checkout = props => {
  return (
    <S.Checkout>
      <CheckoutHeader />
      {props.cartItems.map(item => {
        return (
          <CheckoutItem
            imageUrl={item.imageUrl}
            price={item.price}
            name={item.name}
            quantity={item.quantity}
          />
        );
      })}
    </S.Checkout>
  );
};

const mapStateToProps = state => {
  return { cartItems: state.cart.cartItems };
};

export default connect(mapStateToProps)(Checkout);
