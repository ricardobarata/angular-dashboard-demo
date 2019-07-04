import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClarityModule } from "@clr/angular";
import { ModalComponent } from "./modal.component";

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule {}
