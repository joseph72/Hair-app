import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OtpComponent } from "./otp.component";
@NgModule({
  declarations: [OtpComponent],
  imports: [


CommonModule,

    RouterModule.forChild([
        {path:'', pathMatch: 'full', component: OtpComponent},

      {}
   ]),
  ],
exports:[OtpComponent]
})
export class OtpModule { }
