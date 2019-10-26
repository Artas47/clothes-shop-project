import React, { useEffect } from "react";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Checkout from "./pages/checkout/checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getUser } from "./selectors/user.selector";
import { setUser } from "./actions/index.js";
import { getCartItems } from "./selectors/cart.selector";

const App = props => {
  const { setUser } = props;
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setUser(snapShot.id, snapShot.data());
        });
      } else {
        setUser(userAuth);
      }
    });
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
            props.user.userId ? <Redirect to="/" /> : <SignInAndSignUp />
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

export default connect(
  mapStateToProps,
  { setUser }
)(App);
