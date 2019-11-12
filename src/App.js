import React, { useEffect } from "react";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Checkout from "./pages/checkout/checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "./selectors/user.selector";
import { getCartItems } from "./selectors/cart.selector";
import { checkUserSession } from "./actions/index";

const App = props => {
  useEffect(() => {
    const { checkUserSession } = props;
    checkUserSession();
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.user.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route
          exact
          path="/checkout"
          render={() => {
            return props.cartItems.length ? <Checkout /> : <Redirect to="/" />;
          }}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: getUser(state),
    cartItems: getCartItems(state)
  };
};

export default connect(mapStateToProps, { checkUserSession })(App);
