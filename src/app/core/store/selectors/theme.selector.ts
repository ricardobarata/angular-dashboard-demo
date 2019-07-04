import { createSelector } from "@ngrx/store";
import { CoreState } from "../reducers";
import * as fromReducer from "../reducers/theme.reducer";

export const selectThemeFeature = (state: CoreState) => state.themeFeature;

export const getThemeSelector = createSelector(
  selectThemeFeature,
  fromReducer.getTheme
);
