import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAulasComponent } from './card-aulas.component';

describe('CardAulasComponent', () => {
  let component: CardAulasComponent;
  let fixture: ComponentFixture<CardAulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAulasComponent]
    });
    fixture = TestBed.createComponent(CardAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
