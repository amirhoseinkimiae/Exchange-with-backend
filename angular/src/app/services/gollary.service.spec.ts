import { TestBed } from '@angular/core/testing';

import { GollaryService } from './gollary.service';

describe('GollaryService', () => {
  let service: GollaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GollaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
