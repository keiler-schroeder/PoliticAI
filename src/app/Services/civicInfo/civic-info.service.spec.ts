import { TestBed } from '@angular/core/testing';

import { CivicInfoService } from './civic-info.service';

describe('CivicInfoService', () => {
  let service: CivicInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivicInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
