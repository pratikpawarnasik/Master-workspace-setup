import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsiformComponent } from './tsiform.component';

describe('TsiformComponent', () => {
  let component: TsiformComponent;
  let fixture: ComponentFixture<TsiformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsiformComponent]
    });
    fixture = TestBed.createComponent(TsiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
