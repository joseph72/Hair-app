import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TableModule } from "src/libs/ui-components/table/table.module";
import { SidenavCardModule } from 'src/libs/ui-components/sidenav-card/sidenav-card.module';
import { ServiceProvidersComponent } from "./service-providers.component";

@NgModule({
  declarations: [ServiceProvidersComponent],
  imports: [

  CommonModule,
    TableModule,
    SidenavCardModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ServiceProvidersComponent}
   ]),
  ],

  exports: [ServiceProvidersComponent]
})
export class ServiceProvidersModule { }
