import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyComponent } from './add-buy.component';

describe('AddBuyComponent', () => {
  let component: AddBuyComponent;
  let fixture: ComponentFixture<AddBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBuyComponent]
    });
    fixture = TestBed.createComponent(AddBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
