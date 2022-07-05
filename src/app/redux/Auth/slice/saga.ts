import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '.';
import { request } from 'utils/request';
import {endpoints} from "../../../../config/API";
 function* authLogin(payload) {
     var config = {
         method: 'post',
         url:endpoints.login,
         headers: {
             'Content-Type': 'application/json'
         },
         data : JSON.stringify(payload.payload)
     };
     try{
         const user =yield call(request,config);
         if(2==2){
             yield put(actions.login(user));
             localStorage.setItem("Login", JSON.stringify({accessToken:user.accessToken,user:user.user}))
         }else{
             yield put(actions.loginError(user.message));
         }
     }catch(err){
         yield put(actions.loginError(err));
     }

 }

export function* authLoginSaga() {
   yield takeLatest(actions.loadLogin.type, authLogin);
}
