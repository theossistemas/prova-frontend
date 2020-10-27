import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DevInfo } from './../models/dev-info';
import * as fromActions from './dev-list.actions';

export const devListFeatureKey = 'devList';

export interface DevInfoState extends EntityState<DevInfo> {
  isLoading: boolean;
}

export const adapter: EntityAdapter<DevInfo> = createEntityAdapter<DevInfo>();

export const initialState: DevInfoState = adapter.getInitialState({
  isLoading: true,
});

export const reducer = createReducer(
  initialState,
  on(fromActions.requestLoadDevs, (state) =>
    adapter.setAll([], {
      ...state,
      isLoading: true
    })
  ),
  on(fromActions.loadDevs, (state, action) =>
    adapter.setAll(action.payload, {
      ...state,
      isLoading: false
    })
  ),
  on(fromActions.addDev,
    (state, action) => adapter.addOne(action.payload, state)
  ),
  on(fromActions.updatedev,
    (state, action) => adapter.updateOne(action.payload, state)
  ),
  on(fromActions.deleteDev,
    (state, action) => adapter.removeOne(action.id, state)
  ),
);

export const { selectAll } = adapter.getSelectors();
export const selectIsLoading = (state: DevInfoState) => state.isLoading;
