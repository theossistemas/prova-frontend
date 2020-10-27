import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DevListEffects } from './dev-list.effects';

describe('DevListEffects', () => {
  let actions$: Observable<any>;
  let effects: DevListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DevListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DevListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
