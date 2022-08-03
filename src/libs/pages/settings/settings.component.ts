import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isVisible = false;
  confirm= false;
  resend = false;

  current = 0;
  constructor() { }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    this.resend = false;
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }
  showResend(): void {
    this.resend = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.confirm= true;
  }
  handleCancel(): void {
    this.confirm = false;
  }

  header =['Service','Type', 'Date of Booking', 'Value', 'Booking status', 'Payment Status']
  table =[
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
    {service: 'Haircut', type:'What we do', date: '02-10-2019', value: '$ 25', bookingStatus: 'Complete', paymentStatus: 'Pending'},
  ]

  changeContent(): void {
    switch (this.current) {
      case 0: {

        break;
      }
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      default: {
      }
    }
}
}
