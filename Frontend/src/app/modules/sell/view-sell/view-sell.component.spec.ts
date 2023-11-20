import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSellComponent } from './view-sell.component';

describe('ViewSellComponent', () => {
  let component: ViewSellComponent;
  let fixture: ComponentFixture<ViewSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSellComponent]
    });
    fixture = TestBed.createComponent(ViewSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
