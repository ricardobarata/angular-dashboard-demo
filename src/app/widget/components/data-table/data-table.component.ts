import { Component, ViewEncapsulation } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  TableWidgetResized,
  WindowResized
} from "src/app/layout/store/actions/layout.actions";
import { User } from "../../models/user.model";
import { userData } from "./user-data";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent {
  rows: User[] = userData;
  theme: string;

  private themeSubscription: Subscription;
  private widgetResizeSubscription: Subscription;
  private windowResizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions) {}

  ngOnInit(): void {
    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "material";
      });

    this.widgetResizeSubscription = this.action$
      .pipe(ofType<TableWidgetResized>(LayoutActionTypes.TableWidgetResized))
      .subscribe(() => {
        this.rows = [...this.rows];
      });

    this.windowResizeSubscription = this.action$
      .pipe(ofType<WindowResized>(LayoutActionTypes.WindowResized))
      .subscribe(() => {
        setTimeout(() => {
          this.rows = [...this.rows];
        }, 400);
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.widgetResizeSubscription.unsubscribe();
    this.windowResizeSubscription.unsubscribe();
  }
}
