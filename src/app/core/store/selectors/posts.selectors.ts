import { Posts } from '../interface/posts.interface';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../reducers/posts.reducer';

export const selectPostState = createFeatureSelector<PostState>('postsDataStore');

export const selectData = createSelector(
  selectPostState,
  (state: PostState) => state.data
);

export const selectPosts = createSelector(
  selectData,
  (data: Posts | null) => (data ? data.posts : [])
);

export const selectLoading = createSelector(
  selectPostState,
  (state: PostState) => state.loading
);

export const selectError = createSelector(
  selectPostState,
  (state: PostState) => state.error
);


// fetch data by ID
// export const selectSinglePostId = createSelector(
//   selectPostState,
//   (state: PostState) => state.selectedData
// );


export const selectSinglePost = createSelector(
  selectPostState,
  (state: PostState) => state.selectedData
);

