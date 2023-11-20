import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevenueComponent } from './modal-revenue.component';

describe('ModalRevenueComponent', () => {
  let component: ModalRevenueComponent;
  let fixture: ComponentFixture<ModalRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRevenueComponent]
    });
    fixture = TestBed.createComponent(ModalRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
