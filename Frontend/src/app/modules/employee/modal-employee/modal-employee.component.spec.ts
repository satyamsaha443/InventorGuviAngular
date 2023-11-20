import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmployeeComponent } from './modal-employee.component';

describe('ModalEmployeeComponent', () => {
  let component: ModalEmployeeComponent;
  let fixture: ComponentFixture<ModalEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModalEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
