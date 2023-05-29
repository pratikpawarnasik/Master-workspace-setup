import { createAction, props } from '@ngrx/store';
import { IPosts, IDataById, IPost } from '../interface/posts.interface';

// Define your action type and payload, if any
// export const myAction = createAction('[Auth] My Action', props<{ payload: any }>());


export const POST_LIST_REQUEST = '[Posts] Fetch Posts';
export const POST_LIST_SUCCESS = '[Posts] Fetch Posts Success';
export const POST_LIST_ERROR = '[Posts] Fetch Posts Failure';

export const fetchData = createAction(
  POST_LIST_REQUEST
);

export const fetchDataSuccess = createAction(
  POST_LIST_SUCCESS,
  props<{ data: IPosts | null }>()
);


export const fetchDataFailure = createAction(
  POST_LIST_ERROR,
  props<{ error: string }>()
);

// Fetch data by ID

export const fetchDataById = createAction('[Posts] Fetch Post By ID', props<{ id: number }>());
export const fetchDataByIdSuccess = createAction('[Posts] Fetch Post By ID Success', props<{ data: any  }>());
export const fetchDataByIdFailure = createAction('[Posts] Fetch Post By ID Failure', props<{ error: string }>());



