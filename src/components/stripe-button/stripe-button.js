import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_7yARglWa0rvuZokLaO3woI4L00XPTjr4gi";
  const onToken = token => {
    alert("payment Successful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay now"
        name="Clothes Shop"
        billingAddress
        shippingAddress
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
