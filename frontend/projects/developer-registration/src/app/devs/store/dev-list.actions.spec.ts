import * as fromDevList from './dev-list.actions';

describe('loadDevLists', () => {
  it('should return an action', () => {
    expect(fromDevList.loadDevLists().type).toBe('[DevList] Load DevLists');
  });
});
