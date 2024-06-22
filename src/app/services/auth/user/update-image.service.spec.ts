import { TestBed } from '@angular/core/testing';

import { UpdateImageService } from './update-image.service';

describe('UpdateImageService', () => {
  let service: UpdateImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
