import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  header =['Customer name','Date register', 'Last log in', 'Last booking', 'Status', 'Action']
  table =[
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
    {pic:'assets/images/man.svg', customerName: 'Michael Goldman', dateRegistered:'11-01-2019', lastLogin: '02-10-2019', lastBooking: '02-11-2021', status: 'Active'},
  ]
}
