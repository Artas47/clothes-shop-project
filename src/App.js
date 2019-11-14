import React, { useEffect, lazy, Suspense } from "react";
import Header from "./components/header/header";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "./selectors/user.selector";
import { getCartItems } from "./selectors/cart.selector";
import { checkUserSession } from "./actions/index";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

const Homepage = lazy(() => import("./pages/homepage/homepage"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);
const Shop = lazy(() => import("./pages/shop/shop"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));

const App = props => {
  const { checkUserSession } = props;
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/signin"
              render={() =>
                props.user.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
            <Route
              exact
              path="/checkout"
              render={() => {
                return props.cartItems.length ? (
                  <Checkout />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
          </Suspense>
        </ErrorBoundary>
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
