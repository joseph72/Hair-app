import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NzModalModule } from "ng-zorro-antd/modal";
import { OtpComponent } from "../otp/otp.component";
import { OtpModule } from "../otp/otp.module";
import { SignupComponent } from "./signup.component";
@NgModule({
  declarations: [SignupComponent],
  imports: [

CommonModule,
NzModalModule,
    RouterModule.forChild([
        {path:'', pathMatch: 'full', component: SignupComponent},

      {}
   ]),
  ],
})
export class SignupModule { }
