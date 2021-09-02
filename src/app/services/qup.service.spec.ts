import { TestBed } from '@angular/core/testing';

import { QupService } from './qup.service';

describe('QupService', () => {
  let service: QupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
