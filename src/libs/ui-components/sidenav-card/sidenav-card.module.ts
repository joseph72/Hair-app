import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidenavCardComponent } from "./sidenav-card.component";

@NgModule({
  declarations: [SidenavCardComponent],
  imports: [
    CommonModule,
  ],
  exports: [SidenavCardComponent]
})
export class SidenavCardModule { }
