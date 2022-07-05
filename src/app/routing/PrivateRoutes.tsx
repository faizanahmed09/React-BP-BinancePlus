import React, {  } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Error } from "../pages/error/404";
import { OnBoard } from "../pages/OnBoard/Loadable";
import {Cart} from "../pages/Cart/Loadable";


export function PrivateRoutes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={OnBoard} />
                    {/*<Route path="/cart" exact component={Cart} />*/}
                    <Redirect from='/login' to='/' />
                    <Route path='*' component={Error} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
