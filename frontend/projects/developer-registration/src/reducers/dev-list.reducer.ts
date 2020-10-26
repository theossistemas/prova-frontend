import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DevInfo } from '../entities/dev-info';
import * as DevListActions from './../actions/dev-list.actions';

export const devListFeatureKey = 'devList';

export interface DevInfoState extends EntityState<DevInfo> {}

export const adapter: EntityAdapter<DevInfo> = createEntityAdapter<DevInfo>();

export const initialState: DevInfoState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(DevListActions.loadDevs, (state, action) =>
    adapter.setAll(action.payload, {
      ...state,
    })
  ),
  on(DevListActions.requestLoadDevs, (state, action) =>
    adapter.setAll([], {
      ...state,
    })
  )
);

export const { selectAll } = adapter.getSelectors();
