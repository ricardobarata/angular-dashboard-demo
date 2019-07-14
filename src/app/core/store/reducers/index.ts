import { ActionReducerMap } from "@ngrx/store";
import {
  ThemeReducer,
  ThemeState
} from "src/app/core/store/reducers/theme.reducer";

export interface AppState {
  themeFeature: ThemeState;
}

export const reducers: ActionReducerMap<AppState> = {
  themeFeature: ThemeReducer
};
