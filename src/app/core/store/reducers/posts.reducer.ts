
// const _postsReducer = createReducer(
//   initialState,
//   on(someAction, (state, action) => {
//     // Update the state based on the action
//     // Return the updated state
//   })
// );

// export function postsReducer(state, action) {
//   return _postsReducer(state, action);
// }

import { createReducer, on } from '@ngrx/store';
import * as DataActions from '../actions/posts.actions';
import { Post, Posts } from '../interface/posts.interface';

export interface PostState {
  data: Posts | null;
  selectedData: Post | null ; // Single record
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  data: null,
  selectedData: null, // Single record
  loading: false,
  error: null
};

export const _postsReducer = createReducer(
  initialState,
  on(DataActions.fetchData, (state) => ({ ...state, loading: true })),
  on(DataActions.fetchDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    error: null
  })),
  on(DataActions.fetchDataFailure, (state, { error }) => ({
    ...state,
    data: null,
    loading: false,
    error
  })),
  // fetch by id
  on(DataActions.fetchDataById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DataActions.fetchDataByIdSuccess, (state, { data }) => ({
    ...state,
    selectedData: data,
    loading: false,
  })),
  
  on(DataActions.fetchDataByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))

);
