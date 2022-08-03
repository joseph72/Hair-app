import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  constructor() { }

  options = 0;
  ngOnInit(): void {
  }
  switchOption(value: number) {
    this.options = value;
  }

}
