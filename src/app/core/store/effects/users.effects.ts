// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';

// import { UsersActionTypes, LoadUsers, LoadUsersSuccess, LoadUsersFailure } from '../actions/users.actions';
// import { UsersService } from '../../services/users.service';

// @Injectable()
// export class UsersEffects {
//   loadUsers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType<LoadUsers>(UsersActionTypes.LoadUsers),
//       switchMap(() =>
//         this.usersService.getUsers().pipe(
//           map((users) => new LoadUsersSuccess(users)),
//           catchError((error) => of(new LoadUsersFailure(error)))
//         )
//       )
//     )
//   );

//   constructor(private actions$: Actions, private usersService: UsersService) {}
// }
