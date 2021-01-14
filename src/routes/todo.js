import React from "react";
import { Route, Switch } from "react-router-dom";

import FetchTodos from "../components/Todo/FetchTodos";
import CreateTodo from "../components/Todo/CreateTodo";
import EditTodo from "../components/Todo/EditTodo";
import DeleteTodo from "../components/Todo/DeleteTodo";


export default () => (
  <Switch>
    <Route exact path="/todo/user/add/:id" component={CreateTodo} />
    <Route exact path="/todo/user/:userid" component={FetchTodos} />
    <Route exact path="/todo/delete/:id" component={DeleteTodo} />
    <Route exact path="/todo/edit/:id" component={EditTodo} />
    <Route exact path="/todo" component={FetchTodos} />
  </Switch>
);