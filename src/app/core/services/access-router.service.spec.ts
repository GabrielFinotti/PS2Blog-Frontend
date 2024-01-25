import { TestBed } from '@angular/core/testing';

import { AccessRouterService } from './access-router.service';

describe('AccessRouterService', () => {
  let service: AccessRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
