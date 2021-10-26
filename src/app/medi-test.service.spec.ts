import { TestBed } from '@angular/core/testing';

import { MediTestService } from './medi-test.service';

describe('MediTestService', () => {
  let service: MediTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
