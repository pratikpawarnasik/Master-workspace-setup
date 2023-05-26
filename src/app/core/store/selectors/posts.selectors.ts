import { IPosts } from '../interface/posts.interface';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostState } from '../reducers/posts.reducer';

export const selectPostState = createFeatureSelector<IPostState>('postsDataStore');

export const selectData = createSelector(
  selectPostState,
  (state: IPostState) => state.data
);

export const selectPosts = createSelector(
  selectData,
  (data: IPosts | null) => (data ? data.posts : [])
);

export const selectLoading = createSelector(
  selectPostState,
  (state: IPostState) => state.loading
);

export const selectError = createSelector(
  selectPostState,
  (state: IPostState) => state.error
);


// fetch data by ID
// export const selectSinglePostId = createSelector(
//   selectPostState,
//   (state: IPostState) => state.postDetailsData
// );


export const selectSinglePost = createSelector(
  selectPostState,
  (state: IPostState) => state.postDetailsData
);

