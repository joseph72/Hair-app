import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSuccessComponent } from './settings-success.component';

describe('SettingsSuccessComponent', () => {
  let component: SettingsSuccessComponent;
  let fixture: ComponentFixture<SettingsSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
