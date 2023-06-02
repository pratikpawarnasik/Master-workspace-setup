import { TestBed } from '@angular/core/testing';

import { TsiformService } from './tsiform.service';

describe('TsiformService', () => {
  let service: TsiformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsiformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
