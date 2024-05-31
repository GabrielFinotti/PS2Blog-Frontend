import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { fullAccessGuard } from './full-access.guard';

describe('fullAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => fullAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
