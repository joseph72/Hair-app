import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidenavCardModule } from "src/libs/ui-components/sidenav-card/sidenav-card.module";
import { TableModule } from "src/libs/ui-components/table/table.module";
import { SettingsComponent } from "./settings.component";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { SettingsEmailComponent } from "./settings-email/settings-email.component";
import { SettingsOtpComponent } from "./settings-otp/settings-otp.component";
import { SettingsPasswordComponent } from "./settings-password/settings-password.component";
import { SettingsSuccessComponent } from "./settings-success/settings-success.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent, SettingsEmailComponent, SettingsPasswordComponent, SettingsSuccessComponent, SettingsOtpComponent],
  imports: [
    CommonModule,
    TableModule,
    NzModalModule,
    NzStepsModule,
    ReactiveFormsModule,
    SidenavCardModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: SettingsComponent}
   ]),
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
