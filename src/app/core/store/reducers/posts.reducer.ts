


import { createReducer, on } from '@ngrx/store';
import * as DataActions from '../actions/posts.actions';
import { IPost, IPostState, IPosts } from '../interface/posts.interface';



const initialState: IPostState = {
  data: null,
  postDetailsData: null, // Single record
  loading: false,
  error: null
};

export const _postsReducer = createReducer(
  initialState,

  on(DataActions.fetchData, (state) => ({ 
    ...state, 
    loading: true 
  })),

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
    postDetailsData: data,
    loading: false,
  })),
  
  on(DataActions.fetchDataByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))

);
export { IPostState };


