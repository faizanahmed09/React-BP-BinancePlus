/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 */

import React, {FC, useEffect} from 'react'
import {Redirect, Switch, Route, BrowserRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAuth,
} from 'app/redux/Auth/slice/selectors';
import {useAuthSlice} from "../redux/Auth/slice";
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import { SecureMasterLayout} from "../pages/Layouts/PrivateLayout/SecureMasterLayout";
import {MasterLayout} from "../pages/Layouts/PublicLayout/MasterLayout";
import { useLocation } from "react-router-dom";

const Routes: FC = () => {

  const { actions } = useAuthSlice();
  const isAuthorized = useSelector(selectAuth);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const authhh=true;

    useEffect(() => {
        const user = localStorage.getItem('Login');
        if (user !== null) {
            const data = JSON.parse(user);
            dispatch(actions.login(data));
        }
    }, [])

  return (
      <>
        <BrowserRouter>
          <Helmet
              titleTemplate="React Boilerplate"
              defaultTitle="React Boilerplate"
              htmlAttributes={{ lang: i18n.language }}
          >
            <meta name="description" content="React Boilerplate" />
          </Helmet>
          <Switch>
            {/*<h1>Path is: {location.pathname}</h1>*/}
            {!isAuthorized?(
                <>
                  <Switch>
                    <MasterLayout>
                      <PublicRoutes/>
                    </MasterLayout>
                  </Switch>
                </>
            ):(
                <>
                  <Switch>
                    <SecureMasterLayout>
                      <PrivateRoutes />
                    </SecureMasterLayout>
                  </Switch>
                </>
            )}
          </Switch>
        </BrowserRouter>
      </>
  )
}

export {Routes}
