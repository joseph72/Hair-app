import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { OtpModule } from "./otp/otp.module";

export const routes: Routes = [{ path: '', component: AuthComponent, children: [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {path:'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  {path:'otp', loadChildren: () => import('./otp/otp.module').then(m => m.OtpModule) },
  {path:'reset', loadChildren: () => import('./reset/reset.module').then(m => m.ResetModule) },


]


}];
@NgModule({

imports: [RouterModule.forChild(routes)],
exports: [RouterModule]

})
export class AuthRoutingModule { }
