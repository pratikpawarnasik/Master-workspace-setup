import { TestBed } from '@angular/core/testing';

import { JsonFormTemplateService } from './json-form-template.service';

describe('JsonFormTemplateService', () => {
  let service: JsonFormTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFormTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
