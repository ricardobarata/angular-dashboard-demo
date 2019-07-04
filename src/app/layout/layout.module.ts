import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { HeaderModule } from "./components/header/header.module";
import { MainContentModule } from "./components/main-content/main-content.module";
import { ModalModule } from "./components/modal/modal.module";
import { LayoutComponent } from "./layout.component";
import * as fromLayout from "./store/reducers/layout.reducer";

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    MainContentModule,
    ModalModule,
    StoreModule.forFeature("layoutFeature", fromLayout.reducer)
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule {}
