import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ResetComponent } from "./reset.component";
@NgModule({
  declarations: [ResetComponent],
  imports: [


CommonModule,

    RouterModule.forChild([
        {path:'', pathMatch: 'full', component: ResetComponent},

      {}
   ]),
  ],
})
export class ResetModule { }
