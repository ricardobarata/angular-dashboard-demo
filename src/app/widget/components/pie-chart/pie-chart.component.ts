import { Component, OnDestroy, OnInit } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EChartOption, ECharts } from "echarts";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  WindowResized
} from "src/app/layout/store/actions/layout.actions";
import { PieChartInitConfig } from "./pie-chart-options";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.scss"]
})
export class PieChartComponent implements OnInit, OnDestroy {
  options: EChartOption = PieChartInitConfig;
  theme: string;
  echartsIntance: ECharts;

  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions) {}

  ngOnInit(): void {
    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "default";
      });

    this.resizeSubscription = this.action$
      .pipe(ofType<WindowResized>(LayoutActionTypes.WindowResized))
      .subscribe(() => {
        this.resizeChart();
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  onChartInit(echartsInstance: ECharts): void {
    this.echartsIntance = echartsInstance;
  }

  resizeChart(): void {
    if (this.echartsIntance) {
      setTimeout(() => {
        this.echartsIntance.resize();
      }, 400);
    }
  }
}
