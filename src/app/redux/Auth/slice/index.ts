import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authLoginSaga } from './saga';
import { AuthState } from './types';

export const initialState: AuthState= {
  accessToken:null,
  user: null,
  loading: false,
  customeError: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      state.user=action.payload.user;
      state.accessToken=action.payload.accessToken;
      state.loading=false;
      state.customeError=null
    },
    logout(state) {
      state.accessToken= null;
      state.loading=false;
      state.user= null;
      error:null
    },
    loadLogin(state,action: PayloadAction<any>) {
      state.loading = true;
      state.customeError = null;
    },
    loginError(state, action: PayloadAction<any>) {
      state.customeError = action.payload.response.data.message;
      state.loading = false;
    },
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authLoginSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
