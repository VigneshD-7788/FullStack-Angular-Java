import { TestBed } from '@angular/core/testing';

import { FullStackService } from './full-stack.service';

describe('FullStackService', () => {
  let service: FullStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
