import { TestBed } from '@angular/core/testing';

import { GamesListService } from './games-list.service';

describe('GamesListService', () => {
  let service: GamesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
