import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.auth || initialState;

export const selectAuth = createSelector(
  [selectSlice],
  state => state.accessToken,
);

export const selectAuthUser = createSelector(
    [selectSlice],
    state => state.user,
);

export const selectError = createSelector(
    [selectSlice],
    state => state.customeError,
);
