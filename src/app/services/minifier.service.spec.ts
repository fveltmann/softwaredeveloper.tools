import { TestBed } from '@angular/core/testing';

import { MinifierService } from './minifier.service';

describe('MinifierService', () => {
  let service: MinifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
