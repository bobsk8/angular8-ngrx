import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import UserState, { initializeState } from '../models/userState';

export const initialState = initializeState();

const reducer = createReducer(initialState,
  on(UserActions.SuccessGetUserAction, (state: UserState, { payload }) => {
    return { ...state, users: payload, userError: null };
  }),
  on(UserActions.ErrorUserAction, (state: UserState, error: Error) => {
    console.error(error);
    return { ...state, UserError: error };
  })
);

export function userReducer(state, action) {
  return reducer(state, action);
}
