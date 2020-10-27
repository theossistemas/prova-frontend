import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {  EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DevService } from './../services/dev.service';
import * as fromActions from './dev-list.actions';

@Injectable()
export class DevListEffects {

  constructor(
    private actions$: Actions,
    private devService: DevService,
    private toastrService: ToastrService,
    private ngxSpinnerService: NgxSpinnerService,
  ) {}

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

  deleteDev$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromActions.deleteDev),
      mergeMap(
        action => this.devService.delete(action.id).pipe(
          map(() => {
            this.ngxSpinnerService.hide();
            this.toastrService.success('Desenvolvedor ' + action.id + ' excluído.');
          }),
          catchError(() => {
            this.ngxSpinnerService.hide();
            this.toastrService.error('Falha ao excluir Dev [' + action.id + '].');
            return of(fromActions.errorOnDeleteDev({}));
          })
        ),
      )
    )
  );

}
