import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutoresComponent } from './admin-tutores.component';

describe('AdminTutoresComponent', () => {
  let component: AdminTutoresComponent;
  let fixture: ComponentFixture<AdminTutoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTutoresComponent]
    });
    fixture = TestBed.createComponent(AdminTutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
