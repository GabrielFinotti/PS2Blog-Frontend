import { TestBed } from '@angular/core/testing';

import { GetUserTokenService } from './get-user-token.service';

describe('GetUserTokenService', () => {
  let service: GetUserTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
