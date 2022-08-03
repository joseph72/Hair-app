import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidenavCardModule } from "src/libs/ui-components/sidenav-card/sidenav-card.module";
import { TableModule } from './../../ui-components/table/table.module';
import { BookingsComponent } from "./bookings/bookings.component";
import { DocumentsComponent } from "./documents/documents.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { SpProfileComponent } from "./sp-profile.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [SpProfileComponent, BookingsComponent, TransactionsComponent,ReviewsComponent, DocumentsComponent],
  imports: [

CommonModule,
    TableModule,
    NzModalModule,
    SidenavCardModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: SpProfileComponent}
   ]),
  ],

  exports: [SpProfileComponent]
})
export class SpProfileModule { }
