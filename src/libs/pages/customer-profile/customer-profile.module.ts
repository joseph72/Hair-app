import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TableModule } from './../../ui-components/table/table.module';
import { SidenavCardModule } from './../../ui-components/sidenav-card/sidenav-card.module';
import { CustomerProfileComponent } from "./customer-profile.component";
import { CustomersBookingComponent } from "./customers-booking/customers-booking.component";
import { CustomersPaymentComponent } from "./customers-payment/customers-payment.component";
@NgModule({
  declarations: [CustomerProfileComponent, CustomersBookingComponent, CustomersPaymentComponent],
  imports: [


CommonModule,
    TableModule,
    SidenavCardModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: CustomerProfileComponent}
   ]),
  ],

  exports: [CustomerProfileComponent]
})
export class CustomerProfileModule { }
