import React from "react";
import { Route, Switch } from "react-router-dom";

import CreateUser from "../components/User/CreateUser";
import FetchUsers from "../components/User/FetchUsers";
import EditUser from "../components/User/EditUser";
import DeleteUser from "../components/User/DeleteUser";


export default () => (
  <Switch>
    <Route exact path="/" component={FetchUsers} />
    <Route exact path="/user/create" component={CreateUser} />
    <Route exact path="/user/edit/:id" component={EditUser} />
    <Route exact path="/user/delete/:id" component={DeleteUser} />
  </Switch>
);