import { GridsterItem } from "angular-gridster2";

export interface WidgetItem extends GridsterItem {
  widgetId: number;
  widgetName: string;
}
