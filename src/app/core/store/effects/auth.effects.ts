// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';

// import { AuthActionTypes, Login, LoginSuccess, LoginFailure } from '../actions/auth.actions';
// import { AuthService } from '../../services/auth.service';

// @Injectable()
// export class AuthEffects {
//   login$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType<Login>(AuthActionTypes.Login),
//       map((action) => action.payload),
//       switchMap((payload) =>
//         this.authService.login(payload).pipe(
//           map((response) => new LoginSuccess(response)),
//           catchError((error) => of(new LoginFailure(error)))
//         )
//       )
//     )
//   );

//   constructor(private actions$: Actions, private authService: AuthService) {}
// }
