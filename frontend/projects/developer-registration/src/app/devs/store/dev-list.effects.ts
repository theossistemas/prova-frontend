import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DevService } from './../services/dev.service';
import * as fromActions from './dev-list.actions';

@Injectable()
export class DevListEffects {

  loadDevs$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromActions.requestLoadDevs),
      mergeMap(
        () => this.devService.getAll().pipe(
          map(devs => fromActions.loadDevs({payload: devs })),
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
