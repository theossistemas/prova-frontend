import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DevInfo } from './../models/dev-info';
import * as fromActions from './dev-list.actions';

export const devListFeatureKey = 'devList';

export interface DevInfoState extends EntityState<DevInfo> {}

export const adapter: EntityAdapter<DevInfo> = createEntityAdapter<DevInfo>();

export const initialState: DevInfoState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(fromActions.loadDevs, (state, action) =>
    adapter.setAll(action.payload, {
      ...state,
    })
  ),
  on(fromActions.requestLoadDevs, (state, action) =>
    adapter.setAll([], {
      ...state,
    })
  )
);

export const { selectAll } = adapter.getSelectors();
