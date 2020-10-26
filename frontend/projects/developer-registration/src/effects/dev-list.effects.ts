import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  EMPTY, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import * as DevListActions from '../actions/dev-list.actions';
import { DevService } from '../services/dev.service';
import { DevInfoState } from '../reducers/dev-list.reducer';

@Injectable()
export class DevListEffects {

  loadDevs$ = createEffect(
    () => this.actions$.pipe(
      ofType(DevListActions.requestLoadDevs),
      mergeMap(
        () => this.devService.getAll().pipe(
          map(devs => DevListActions.loadDevs({payload: devs })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private devService: DevService
  ) {}

}
