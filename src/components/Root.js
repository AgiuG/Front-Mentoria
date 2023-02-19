import React from "react";
import { Switch, Router, Route } from "react-router";
import { history } from "../history";

import Login from "../pages/Login";
import Home from "../pages/Home";

const Root = () => {
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>;
};

export default Root;
