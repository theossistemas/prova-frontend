import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from './../reducers/dev-list.reducer';

const devListSelector = createFeatureSelector<fromStore.DevInfoState>(fromStore.devListFeatureKey);

export const devList = createSelector(devListSelector, fromStore.selectAll);
