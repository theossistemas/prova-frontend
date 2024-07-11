import { TestBed } from '@angular/core/testing';

import { ParameterCheckGuard } from './parameter-check.guard';

describe('ParameterCheckGuard', () => {
  let guard: ParameterCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParameterCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
