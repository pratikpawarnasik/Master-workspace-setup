import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap, switchMap } from 'rxjs/operators';
import * as  DataActions from '../actions/posts.actions';
import { PostsService } from '../services/posts.service';

@Injectable()
export class _postsEffects {
  constructor(private actions$: Actions, private _postsService: PostsService) {}

  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.fetchData),
      switchMap(() =>
        this._postsService.fetchData().pipe(delay(100),
          map((data) => DataActions.fetchDataSuccess({ data })),
          catchError((error) => of(DataActions.fetchDataFailure({ error: error.message })))
        )
      )
    )
  );

  // Fetch data by ID

  fetchDataById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.fetchDataById),
      mergeMap(action =>
        this._postsService.fetchDataById(action.id).pipe(map((response) => DataActions.fetchDataByIdSuccess({ data: response })),
          catchError(error => of(DataActions.fetchDataByIdFailure({ error: error.message })))
        )
      )
    )
  );

 
}
