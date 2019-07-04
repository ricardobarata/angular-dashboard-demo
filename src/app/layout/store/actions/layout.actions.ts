import { Action } from "@ngrx/store";

export enum LayoutActionTypes {
  WindowResized = "[Layout] Window Resized",
  TableWidgetResized = "[Layout] Widget Resized"
}

export class WindowResized implements Action {
  public readonly type = LayoutActionTypes.WindowResized;
}

export class TableWidgetResized implements Action {
  public readonly type = LayoutActionTypes.TableWidgetResized;
}

export type LayoutActions = WindowResized | TableWidgetResized;
