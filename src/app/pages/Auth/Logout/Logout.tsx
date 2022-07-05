/**
 *
 * About
 *
 */
import React from 'react';
import {Link, Redirect, Switch, useHistory} from "react-router-dom";
import {useAuthSlice} from "app/redux/Auth/slice";
import {useDispatch, useSelector} from 'react-redux';

export const Logout = () => {
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();
  const logout=()=>{
    const user = localStorage.removeItem('Login');
    dispatch(actions.logout());
  }
  return (
    <Switch>
      <>
        <button onClick={() => logout() }>Logout</button>
      </>
    </Switch>
  );
}
