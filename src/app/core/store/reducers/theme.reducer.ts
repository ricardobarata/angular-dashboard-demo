import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThemeActions, ThemeActionTypes } from "../actions/theme.actions";

export interface ThemeState {
  theme: string;
}

const initialThemeState: ThemeState = {
  theme: "Light"
};

export function ThemeReducer(
  state = initialThemeState,
  action: ThemeActions
): ThemeState {
  switch (action.type) {
    case ThemeActionTypes.SetLightTheme:
      return {
        ...state,
        theme: "Light"
      };

    case ThemeActionTypes.SetDarkTheme:
      return {
        ...state,
        theme: "Dark"
      };
    default:
      return state;
  }
}

const selectFeature = createFeatureSelector<ThemeState>("themeFeature");

export const getThemeType = createSelector(
  selectFeature,
  (state: ThemeState) => state && state.theme
);
