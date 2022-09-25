import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentsTransitComponent } from './consignments-transit.component';

describe('ConsignmentsTransitComponent', () => {
  let component: ConsignmentsTransitComponent;
  let fixture: ComponentFixture<ConsignmentsTransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentsTransitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignmentsTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
