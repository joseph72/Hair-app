import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-settings-otp',
  templateUrl: './settings-otp.component.html',
  styleUrls: ['./settings-otp.component.scss']
})
export class SettingsOtpComponent implements OnInit {



  @ViewChild('num1') num1Ref?: ElementRef

  isVisible = false


  otpForm?: FormGroup;

  constructor( private fb: FormBuilder) { }

  move(event: KeyboardEvent, mainCtrl: string, forward: HTMLElement, back: HTMLElement) {
    const inputCtrl = this.otpForm?.get(mainCtrl);
    if (!isNaN(Number(event.key))) {
      if (!forward) { return }
      setTimeout(() => {
        forward?.focus()
      });

    } else if (event.key === 'Backspace') {
      if (inputCtrl?.value || inputCtrl?.value === 0) {
        inputCtrl?.reset()
      } else {
        if (!back) { return }
        back?.focus()
      }

    }
  }






  ngOnInit() {

    this.otpForm = this.fb.group({
      num1: [null, [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)]],
      num2: [null, [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)]],
      num3: [null, [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)]],
      num4: [null, [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)]]
    })
  }


}

