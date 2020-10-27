import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { DevInfo } from './../models/dev-info';

export const requestLoadDevs = createAction(
  '[Devs/API] Request Load Devs',
);

export const loadDevs = createAction(
  '[Devs/API] Load Devs',
  props<{ payload: DevInfo[] }>()
);

export const addDev = createAction(
  '[Devs/API] Add Dev',
  props<{ payload: DevInfo }>()
);

export const updatedev = createAction(
  '[Devs/API] Update Dev',
  props<{ payload: Update<DevInfo> }>()
);

export const deleteDev = createAction(
  '[Devs/API] Delete Dev',
  props<{ id: string }>()
);
export const requestDeleteDev = createAction(
  '[Devs/API] Request Delete Dev'
);
export const errorOnDeleteDev = createAction(
  '[Devs/API] Error On Delete Dev',
  props<any>()
);
