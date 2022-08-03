import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersBookingComponent } from './customers-booking.component';

describe('CustomersBookingComponent', () => {
  let component: CustomersBookingComponent;
  let fixture: ComponentFixture<CustomersBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
