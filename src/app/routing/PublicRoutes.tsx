import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "../pages/Auth/Login/Loadable";


import { Error } from "../pages/error/404";
import { Loader } from "app/pages/loader/loader";
import { Register } from "../pages/Auth/Register/Loadable";
import {HomePage} from "../pages/HomePage/Loadable";
import {Cart} from "../pages/Cart/Loadable";


export function PublicRoutes() {
  return (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/loader" exact component={Loader} />
        <Route path="*" component={Error} />
      {/* <Redirect to='/404' /> */}
    </Switch>
  );
}
