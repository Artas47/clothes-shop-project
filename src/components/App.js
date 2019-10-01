import React from "react";
import Homepage from "../pages/homepage/homepage";
import Header from "./header/header";
import Shop from "../pages/shop/shop";
import { Route, Switch } from "react-router-dom";
import "../App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
