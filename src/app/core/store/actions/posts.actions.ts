import { createAction, props } from '@ngrx/store';
import { Posts, DataById, Post } from '../interface/posts.interface';

// Define your action type and payload, if any
// export const myAction = createAction('[Auth] My Action', props<{ payload: any }>());


export const POST_LIST_REQUEST = 'Fetch Posts Request';
export const POST_LIST_SUCCESS = 'Fetch Posts Success';
export const POST_LIST_ERROR = 'Fetch Posts Failure';
export const POST_DELETE = '';
export const POST_UPDATE = '';
export const POST_ADD = '';
export const POST_DETAIL_REQUEST = 'Fetch Post Detail Request';
export const POST_DETAIL_SUCCESS = 'Fetch Post Detail Success';
export const POST_DETAIL_ERROR = 'Fetch Post Detail Failure';



// Fetch all posts data
export class PostListRequestAction {
  readonly type = POST_LIST_REQUEST;
}


export class PostListErrorAction {
  readonly type = POST_LIST_ERROR;
}

export class PostListSuccessAction {
  readonly type = POST_LIST_SUCCESS;

  constructor(public payload?: { data: any }) {
  }
}
export const fetchData = createAction('[Posts] Fetch Posts');

export const fetchDataSuccess = createAction(
  POST_LIST_REQUEST,
  props<{ data: Posts }>()
);

export const fetchDataFailure = createAction(
  POST_LIST_ERROR,
  props<{ error: string }>()
);

// Fetch data by ID

export const fetchDataById = createAction('[Posts] Fetch Posts By ID', props<{ id: number }>());
export const fetchDataByIdSuccess = createAction('[Posts] Fetch Posts By ID Success', props<{ data: any  }>());
export const fetchDataByIdFailure = createAction('[Posts] Fetch Posts By ID Failure', props<{ error: string }>());



