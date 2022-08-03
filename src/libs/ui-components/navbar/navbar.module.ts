import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { NavbarComponent } from "./navbar.component";
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    NzDrawerModule,
    NzIconModule,
    NzAvatarModule,
    NzDropDownModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
