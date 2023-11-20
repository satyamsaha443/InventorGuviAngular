import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExpenseComponent } from './modal-expense.component';

describe('ModalExpenseComponent', () => {
  let component: ModalExpenseComponent;
  let fixture: ComponentFixture<ModalExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExpenseComponent]
    });
    fixture = TestBed.createComponent(ModalExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
