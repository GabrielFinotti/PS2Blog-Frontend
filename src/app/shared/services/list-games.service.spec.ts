import { TestBed } from '@angular/core/testing';

import { ListGamesService } from './list-games.service';

describe('ListGamesService', () => {
  let service: ListGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
