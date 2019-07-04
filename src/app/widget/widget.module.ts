import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxEchartsModule } from "ngx-echarts";
import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { DynamicWidgetComponent } from "./components/dynamic-widget/dynamic-widget.component";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { TextComponent } from "./components/text/text.component";
import { DynamicWidgetDirective } from "./directives/dynamic-widget.directive";
import { WidgetService } from "./services/dynamic-widget.service";

@NgModule({
  imports: [CommonModule, NgxEchartsModule, BrowserModule, NgxDatatableModule],
  declarations: [
    DynamicWidgetComponent,
    DynamicWidgetDirective,
    TextComponent,
    PieChartComponent,
    BarChartComponent,
    DataTableComponent
  ],
  exports: [DynamicWidgetComponent],
  providers: [WidgetService],
  entryComponents: [DataTableComponent]
})
export class WidgetModule {}
