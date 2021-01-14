import React from "react";
import { Route, Switch } from "react-router-dom";

import user from "./user";
import todo from "./todo";



export default () => (
  <Switch>
    <Route exact path="/" component={user} />
    <Route path="/user" component={user} />
    <Route path="/todo" component={todo} />
  </Switch>
);