import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  constructor() { }

  options = 0;
  ngOnInit(): void {
  }
  switchOption(value: number) {
    this.options = value;
  }
  header =['Customer name','Date register', 'Last log in', 'Last booking', 'Status']
  table =[
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active', url:'/customer-profile'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
  ]
}
