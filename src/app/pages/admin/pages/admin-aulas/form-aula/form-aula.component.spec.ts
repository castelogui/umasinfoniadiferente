import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAulaComponent } from './form-aula.component';

describe('FormAulaComponent', () => {
  let component: FormAulaComponent;
  let fixture: ComponentFixture<FormAulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAulaComponent]
    });
    fixture = TestBed.createComponent(FormAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
