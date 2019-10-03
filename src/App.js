import React, { useEffect } from "react";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { fetchUser } from "./actions/index.js";

let unsubscribeFromAuth = null;
const App = props => {
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      props.fetchUser(user);
      console.log(user);
    });
    return () => {
      console.log("i did unmount");
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default connect(
  null,
  { fetchUser }
)(App);
