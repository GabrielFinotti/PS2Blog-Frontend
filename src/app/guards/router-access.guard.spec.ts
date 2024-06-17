import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routerAccessGuard } from './router-access.guard';

describe('routerAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routerAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
