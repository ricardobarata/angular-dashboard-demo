import { Action } from "@ngrx/store";

export enum ThemeActionTypes {
  SetDarkTheme = "[Theme] Set Dark Theme",
  SetLightTheme = "[Theme] Set Light Theme"
}

export class SetDarkTheme implements Action {
  public readonly type = ThemeActionTypes.SetDarkTheme;
}

export class SetLightTheme implements Action {
  public readonly type = ThemeActionTypes.SetLightTheme;
}

export type ThemeActions = SetDarkTheme | SetLightTheme;
