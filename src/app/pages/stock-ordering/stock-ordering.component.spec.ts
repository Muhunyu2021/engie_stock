import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrderingComponent } from './stock-ordering.component';

describe('StockOrderingComponent', () => {
  let component: StockOrderingComponent;
  let fixture: ComponentFixture<StockOrderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOrderingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
