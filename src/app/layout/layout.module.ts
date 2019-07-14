import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from "./components/header/header.module";
import { MainContentModule } from "./components/main-content/main-content.module";
import { ModalModule } from "./components/modal/modal.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
  imports: [CommonModule, HeaderModule, MainContentModule, ModalModule],
  declarations: [LayoutComponent]
})
export class LayoutModule {}
