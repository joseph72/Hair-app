import { CommonModule } from "@angular/common";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    NzModalModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }

