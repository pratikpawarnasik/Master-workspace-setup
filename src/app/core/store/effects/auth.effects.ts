import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';


import { from, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from '../actions/auth.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class _authEffects {
//     login$ = createEffect((): Observable<Action> =>
//   this.actions$.pipe(
//     ofType(AuthActions.login),
//     switchMap((action) =>
//       this.authService.login(action.username, action.password).pipe(
//         map((response) => AuthActions.loginSuccess({ user: response })),
//         catchError((error) => of(AuthActions.loginFailure({ error: error.message })))
//       )
//     )
//   )
// );

login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap((action) =>
      from(this.authService.login(action.username, action.password)).pipe(
        map((response) => AuthActions.loginSuccess({ user: response })),
        catchError((error) => of(AuthActions.loginFailure({ error: error.message })))
      )
    )
  )
);
  

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          // Perform any necessary actions upon successful login, such as navigating to a different page
          // Example: this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false } // Set dispatch to false since we don't want to trigger another action
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
