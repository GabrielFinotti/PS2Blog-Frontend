import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userRouteGuard } from './user-route.guard';

describe('userRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
