import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { OtpModule } from './otp/otp.module';
@NgModule({
  declarations: [AuthComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,

  ],

})
export class AuthModule { }
