import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TableModule } from './../../ui-components/table/table.module';
import { CustomersComponent } from "./customers.component";
@NgModule({
  declarations: [CustomersComponent],
  imports: [


CommonModule,
    TableModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: CustomersComponent},
      {path:'customer-profile', component:CustomersComponent}
   ]),
  ],

  exports: [CustomersComponent]
})
export class CustomersModule { }
