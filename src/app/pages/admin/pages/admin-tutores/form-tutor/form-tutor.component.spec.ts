import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTutorComponent } from './form-tutor.component';

describe('FormTutorComponent', () => {
  let component: FormTutorComponent;
  let fixture: ComponentFixture<FormTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTutorComponent]
    });
    fixture = TestBed.createComponent(FormTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
