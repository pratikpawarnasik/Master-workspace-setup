import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  user: any | null;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  error: null
};

export const _authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    error
  }))
);
