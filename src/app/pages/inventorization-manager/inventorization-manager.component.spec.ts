import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorizationManagerComponent } from './inventorization-manager.component';

describe('InventorizationManagerComponent', () => {
  let component: InventorizationManagerComponent;
  let fixture: ComponentFixture<InventorizationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorizationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorizationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
