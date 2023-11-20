import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRevenueComponent } from './edit-revenue.component';

describe('EditRevenueComponent', () => {
  let component: EditRevenueComponent;
  let fixture: ComponentFixture<EditRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRevenueComponent]
    });
    fixture = TestBed.createComponent(EditRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
