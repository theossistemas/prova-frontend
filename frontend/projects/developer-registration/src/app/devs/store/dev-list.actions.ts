import { createAction, props } from '@ngrx/store';
import { DevInfo } from './../models/dev-info';

export const requestLoadDevs = createAction(
  '[Devs/API] Request Load Devs',
);

export const loadDevs = createAction(
  '[Devs/API] Load Devs',
  props<{ payload: DevInfo[] }>()
);
