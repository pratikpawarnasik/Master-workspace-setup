import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, delay, filter, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as  DataActions from '../actions/posts.actions';
import { PostsService } from '../../services/posts.service';
import { selectData, selectSinglePost } from '../selectors/posts.selectors';
import { Store } from '@ngrx/store';
const responseData= {
  loading:false
}
@Injectable()
export class _postsEffects {
  constructor(
    private actions$: Actions, 
    private _postsService: PostsService,
    private store: Store
    
    ) {}
    private loadingSubject = new BehaviorSubject<boolean>(false);
 

fetchData$ = createEffect(() =>
  this.actions$.pipe(
    ofType(DataActions.fetchData),
    withLatestFrom(this.store.select(selectData)),
    filter(([action, data]) => data === null), // Check if data is already stored
    switchMap(([action, data]) =>
      this._postsService.fetchPostsData().pipe(
        delay(100),
        map((responseData) => DataActions.fetchDataSuccess({ data: responseData })),
        catchError((error) => of(DataActions.fetchDataFailure({ error: error.message })))
      )
    ),
    catchError((error) => of(DataActions.fetchDataFailure({ error: error.message }))),
    tap(() => {
      // Additional logic after successful API response
    })
  )
);

  // Fetch data by ID


fetchDataById$ = createEffect(() =>
  this.actions$.pipe(
    ofType(DataActions.fetchDataById),
    withLatestFrom(this.store.select(selectSinglePost)),
    filter(([action, selectedPosts]) => {
      const postId = action.id;
      return !selectedPosts || !selectedPosts.some(post => post.id === postId);
    }),
    switchMap(([action, selectedPosts]) =>
      this._postsService.fetchPostById(action.id).pipe(
        map((responseData) => {
          const updatedPostDetailsData = selectedPosts ? [...selectedPosts, responseData] : [responseData];
          return DataActions.fetchDataByIdSuccess({ data: updatedPostDetailsData });
        }),
        catchError((error) => of(DataActions.fetchDataByIdFailure({ error: error.message })))
      )
    ),
    tap(() => this.store.dispatch(DataActions.fetchDataByIdLoading({ loading: false })))
  )
);

}
