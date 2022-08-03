import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-payment',
  templateUrl: './customers-payment.component.html',
  styleUrls: ['./customers-payment.component.scss']
})
export class CustomersPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header =['Service Provider','Date register', 'Last log in', 'Last booking', 'Status', 'Action']
  table =[
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
  ]
}
