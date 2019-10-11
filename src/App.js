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
const App = props => {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          props.setUser(snapShot.id, snapShot.data());
        });
      } else {
        props.setUser(userAuth);
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.user.userId ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: getUser(state) };
};

export default connect(
  mapStateToProps,
  { setUser }
)(App);
