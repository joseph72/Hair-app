import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isVisible = false;
  show = false;
  eyeOff = true;
  constructor() { }

  ngOnInit(): void {
  }

   openOtp(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
  }
  passwordToggle() {
    this.show = !this.show;
  }
}
