import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
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

  addDev$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromActions.addDev),
      mergeMap(
        action => this.devService.post(action.payload).pipe(
          map(dev => {
            this.ngxSpinnerService.hide();
            this.router.navigateByUrl('/devs');
            return fromActions.successOnAddDev({ payload: dev });
          }),
          catchError(() => {
            this.ngxSpinnerService.hide();
            this.toastrService.error('Falha ao salvar desenvolvedor.');
            return of(fromActions.errorOnAddDev({}));
          })
        ),
      )
    )
  );

  updateDev$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromActions.updateDev),
      mergeMap(
        action => this.devService.put(action.payload.id, action.payload.changes).pipe(
          map(dev => {
            this.ngxSpinnerService.hide();
            this.router.navigateByUrl('/devs');
            return fromActions.successOnUpdateDev({ payload: dev });
          }),
          catchError(() => {
            this.ngxSpinnerService.hide();
            this.toastrService.error('Falha ao editar desenvolvedor.');
            return of(fromActions.errorOnUpdateDev({}));
          })
        ),
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
            return fromActions.successOnDeleteDev({ id: action.id });
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
