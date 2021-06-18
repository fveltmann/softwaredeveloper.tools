import { TestBed } from '@angular/core/testing';

import { MinifyService } from './minify.service';

describe('MinifyService', () => {
  let service: MinifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
