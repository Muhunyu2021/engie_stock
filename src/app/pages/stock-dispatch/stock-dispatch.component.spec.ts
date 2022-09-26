import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDispatchComponent } from './stock-dispatch.component';

describe('StockDispatchComponent', () => {
  let component: StockDispatchComponent;
  let fixture: ComponentFixture<StockDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
