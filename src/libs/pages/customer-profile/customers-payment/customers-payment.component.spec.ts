import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPaymentComponent } from './customers-payment.component';

describe('CustomersPaymentComponent', () => {
  let component: CustomersPaymentComponent;
  let fixture: ComponentFixture<CustomersPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
