import { ThemeActions, ThemeActionTypes } from "../actions/theme.actions";
import { initialThemeState, ThemeState } from "../states/theme.state";

export function reducer(
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

export const getTheme = (state: ThemeState) => state && state.theme;
