import { createAction, props } from '@ngrx/store';

// Define your action type and payload, if any
export const myAction = createAction('[Auth] My Action', props<{ payload: any }>());
