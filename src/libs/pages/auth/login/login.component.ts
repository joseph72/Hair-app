import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit(): void {
  }
fb() {
  console.log('hu')
}
passwordToggle() {
  this.show = !this.show;
}
}
