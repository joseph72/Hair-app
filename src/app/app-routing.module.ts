import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';

const routes: Routes = [
  {
    path:'', component:AppMainComponent, children: [

      { path: '', pathMatch: 'full',   loadChildren: () => import('../libs/pages/customers/customers.module').then(m => m.CustomersModule) },

      {path:'service-providers', loadChildren: () => import('../libs/pages/service-providers/service-providers.module').then(m => m.ServiceProvidersModule)},
      {path:'settings', loadChildren: () => import('../libs/pages/settings/settings.module').then(m => m.SettingsModule)},
      {path:'customer-profile', loadChildren: () => import('../libs/pages/customer-profile/customer-profile.module').then(m => m.CustomerProfileModule)},
      {path:'sp-profile', loadChildren: () => import('../libs/pages/sp-profile/sp-profile.module').then(m => m.SpProfileModule)},

    ]
  },

  {path: 'auth',   loadChildren: () => import('../libs/pages/auth/auth.module').then(m => m.AuthModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
