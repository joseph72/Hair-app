import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header =['Service','Type', 'Date of Booking', 'Value', 'Booking status', 'Payment Status']
  table =[
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
  ]

}
