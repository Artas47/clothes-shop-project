import React, { useEffect } from "react";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getUser } from "./actions/index.js";
const App = props => {
  useEffect(() => {
    console.log('fds')
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          props.getUser(snapShot.id, snapShot.data());
        });
      } else {
        props.getUser(userAuth);
      }
    });
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
  { getUser }
)(App);
