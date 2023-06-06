import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormTemplateComponent } from './json-form-template.component';

describe('JsonFormTemplateComponent', () => {
  let component: JsonFormTemplateComponent;
  let fixture: ComponentFixture<JsonFormTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonFormTemplateComponent]
    });
    fixture = TestBed.createComponent(JsonFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
