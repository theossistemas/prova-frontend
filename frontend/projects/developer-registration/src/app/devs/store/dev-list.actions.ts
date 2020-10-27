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
export const successOnAddDev = createAction(
  '[Devs/API] Success Add Dev',
  props<{ payload: DevInfo }>()
);
export const errorOnAddDev = createAction(
  '[Devs/API] Error On Add Dev',
  props<any>()
);

export const updateDev = createAction(
  '[Devs/API] Update Dev',
  props<{ payload: Update<DevInfo> }>()
);
export const successOnUpdateDev = createAction(
  '[Devs/API] Success On Update Dev',
  props<{ payload: DevInfo }>()
);
export const errorOnUpdateDev = createAction(
  '[Devs/API] Error On Update Dev',
  props<any>()
);


export const deleteDev = createAction(
  '[Devs/API] Delete Dev',
  props<{ id: string }>()
);
export const successOnDeleteDev = createAction(
  '[Devs/API] Success On Delete Dev',
  props<{ id: string }>()
);
export const errorOnDeleteDev = createAction(
  '[Devs/API] Error On Delete Dev',
  props<any>()
);
