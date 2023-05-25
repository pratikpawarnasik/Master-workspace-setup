import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromPostReducer from '../reducers/posts.reducer'



export interface RootReducerState {
    // users: fromUser.UserReducerState;
    post: fromPostReducer.PostReducerState;
  }
  
  export const rootReducer: ActionReducerMap<RootReducerState> = {
    // users: fromUser.UserReducer,
    post: fromPostReducer._postsReducer
  };

  export const getPostState = (state: RootReducerState) => state.post;

export const getPostLoaded = createSelector(getPostState, fromPostReducer.getLoaded);
export const getPostLoading = createSelector(getPostState, fromPostReducer.loading);
export const getPostEntities = createSelector(getPostState, fromPostReducer.getEntities);
export const getPosts = createSelector(getPostState, fromPostReducer.getPosts);
export const getPostError = createSelector(getPostState, fromPostReducer.getError);



