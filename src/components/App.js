import React from "react";
import Homepage from "../pages/homepage/homepage";
import Header from "./header/header";
import { Route, Switch } from "react-router-dom";
import "../App.scss";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
