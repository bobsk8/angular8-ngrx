import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from 'src/app/core/services/user.service';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.GetAll),
    mergeMap(() => this.userService.getAll()
      .pipe(
        map(users => (UserActions.SuccessGetUserAction({ payload: users }))),
        catchError(error => of(UserActions.ErrorUserAction(error)))
      ))
  )
  );
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}
