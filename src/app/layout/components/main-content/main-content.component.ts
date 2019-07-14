import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { select, Store } from "@ngrx/store";
import {
  GridsterConfig,
  GridsterItemComponentInterface
} from "angular-gridster2";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import { WidgetType } from "src/app/widget/models/widget.model";
import { WidgetItem } from "../../models/widget.model";
import {
  TableWidgetResized,
  WindowResized
} from "../../store/actions/layout.actions";
import { gridConfig } from "./grid-config";
import { mainContentWidgets } from "./main-content-data";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class MainContentComponent implements OnInit, OnDestroy {
  widgets: WidgetItem[] = mainContentWidgets;
  theme: string;

  private themeSubscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "light";
      });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private readonly onItemChange = (
    item: WidgetItem,
    itemComponent: GridsterItemComponentInterface
  ): void => {
    console.info("onItemChange", item, itemComponent);
  };

  private readonly onItemResize = (
    item: WidgetItem,
    itemComponent: GridsterItemComponentInterface
  ): void => {
    console.info("onItemResize", item, itemComponent);
    if (item.widgetId === WidgetType.DataTable) {
      this.store.dispatch(new TableWidgetResized());
    }
  };

  private readonly onItemInit = (
    item: WidgetItem,
    itemComponent: GridsterItemComponentInterface
  ): void => {
    console.info("onItemInit", item, itemComponent);
  };

  readonly options: GridsterConfig = {
    ...gridConfig,
    itemChangeCallback: this.onItemChange,
    itemResizeCallback: this.onItemResize,
    itemInitCallback: this.onItemInit
  };

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    console.info("onWindowResize", event);
    this.store.dispatch(new WindowResized());
  }
}
