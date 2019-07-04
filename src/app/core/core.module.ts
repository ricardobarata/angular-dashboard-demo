import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeService } from "./services/theme.service";

@NgModule({
  imports: [CommonModule],
  providers: [ThemeService]
})
export class CoreModule {}
