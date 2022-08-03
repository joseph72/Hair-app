import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  menus = [
    {name: 'Customers', url:'/'},
    {name: 'Service Providers', url:'/service-providers'},
    {name: 'Settings', url:'/settings'}
  ]
  ngOnInit(): void {
  }
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
