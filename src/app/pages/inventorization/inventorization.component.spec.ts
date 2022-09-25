import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorizationComponent } from './inventorization.component';

describe('InventorizationComponent', () => {
  let component: InventorizationComponent;
  let fixture: ComponentFixture<InventorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
