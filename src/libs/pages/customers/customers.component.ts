import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  // customer: Customer[] =[];
  profile?: any[];
  constructor() { }

  ngOnInit(): void {
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
