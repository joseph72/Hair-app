import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-booking',
  templateUrl: './customers-booking.component.html',
  styleUrls: ['./customers-booking.component.scss']
})
export class CustomersBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  header =['Service Provider','Service','Type', 'Date of Booking', 'Value', 'Booking status', 'Payment Status']
  table =[
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {pic:'assets/images/man.svg', serviceProvider: 'Michael Goldman', service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
  ]
}
