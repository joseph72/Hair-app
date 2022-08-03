import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOtpComponent } from './settings-otp.component';

describe('SettingsOtpComponent', () => {
  let component: SettingsOtpComponent;
  let fixture: ComponentFixture<SettingsOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
