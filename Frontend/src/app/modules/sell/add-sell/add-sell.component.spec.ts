import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellComponent } from './add-sell.component';

describe('AddSellComponent', () => {
  let component: AddSellComponent;
  let fixture: ComponentFixture<AddSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSellComponent]
    });
    fixture = TestBed.createComponent(AddSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
