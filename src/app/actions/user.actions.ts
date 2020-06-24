import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const Save = createAction('[User Component] Save',
props<User>());
export const GetAll = createAction('[User Component] GetAll');
export const SuccessGetUserAction = createAction('[Users API] Users Loaded Success', props<{ payload: User[] }>());
export const ErrorUserAction = createAction('[User] - Error', props<Error>());
